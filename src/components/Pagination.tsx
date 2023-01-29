import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import styles from "@/styles/Home.module.css";
import { PaginationContext } from "@/store/pagination-context";
import { getPokemons } from "@/graphql/get-pokemons";
import { GetPokemonsQuery } from "@/graphql/graphql-operations";

const Pagination: React.FC<{
  onChangeData: (newData: GetPokemonsQuery | undefined) => void;
  onIsLoading: (isLoading: boolean) => void;
  onError: (error: string) => void;
}> = ({ onChangeData, onIsLoading, onError }) => {
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

  onIsLoading(isLoading);

  if (error instanceof Error) onError(error.message);

  onChangeData(data);

  return (
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
};

export default Pagination;
