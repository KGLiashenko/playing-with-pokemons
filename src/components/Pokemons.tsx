import { Inter } from "@next/font/google";
import { useQuery } from "@tanstack/react-query";
import { Suspense, useContext } from "react";

import styles from "@/styles/Home.module.css";
import PokemonsList from "./PokemonsList";
import { PokemonsType } from "@/models/types";
import { getPokemons } from "@/graphql/get-pokemons";
import { PaginationContext } from "@/store/pagination-context";

const inter = Inter({ subsets: ["latin"] });

const Pokemons: React.FC<PokemonsType> = ({ pokemons }) => {
  const paginationContext = useContext(PaginationContext);

  const { data, isPreviousData, error } = useQuery({
    queryKey: ["pokemons", paginationContext.offset],
    queryFn: () => {
      const data = getPokemons({
        limit: paginationContext.limit,
        offset: paginationContext.offset,
      });
      return data;
    },
    keepPreviousData: true,
  });

  // pagination
  const previousPage = () => {
    paginationContext.previousPage();
  };

  const nextPage = () => {
    if (!isPreviousData) paginationContext.nextPage();
  };

  const pagination = (
    <div className={styles["pagination-container"]}>
      <ul className={styles.pagination}>
        <li onClick={previousPage} className={styles["page-index"]}>
          Prev
        </li>
        <li onClick={nextPage} className={styles["page-index"]}>
          Next
        </li>
      </ul>
    </div>
  );

  let content = (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <PokemonsList pokemons={!data ? pokemons : data!.pokemons} />
      </Suspense>
      {pagination}
    </>
  );

  if (error instanceof Error) content = <p>{error.message}</p>;

  return (
    <>
      <div className={styles.center}>
        <h1 className={inter.className}>Pokemons</h1>
      </div>
      {content}
    </>
  );
};

export default Pokemons;
