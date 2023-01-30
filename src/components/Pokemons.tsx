import { Inter } from "@next/font/google";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import PokemonsList from "./PokemonsList";
import { PokemonsType } from "@/models/types";
import { getPokemons } from "@/graphql/get-pokemons";
import { PaginationContext } from "@/store/pagination-context";
import Loading from "./Loading";
import Pagination from "./Pagination";

const inter = Inter({ subsets: ["latin"] });

const Pokemons: React.FC<PokemonsType> = ({ pokemons }) => {
  const paginationContext = useContext(PaginationContext);

  const { data, isLoading, isPreviousData, error } = useQuery({
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

  let content = (
    <>
      <PokemonsList pokemons={!data ? pokemons : data!.pokemons} />
      <Pagination
        isPreviousDisabled={paginationContext.offset === 0}
        isNextDisabled={isPreviousData}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );

  if (isLoading) content = <Loading />;

  if (error instanceof Error) content = <p>{error.message}</p>;

  return (
    <div className="container justify-content-center text-center py-4">
      <h1 className={`${inter.className} text-center p-4`}>Pokemons</h1>
      {content}
    </div>
  );
};

export default Pokemons;
