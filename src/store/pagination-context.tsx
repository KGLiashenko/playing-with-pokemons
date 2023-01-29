import React, { useState } from "react";

type PaginationType = {
  limit: number;
  offset: number;
  previousPage: () => void;
  nextPage: () => void;
};

type PaginationProps = {
  children: JSX.Element | JSX.Element[];
};

export const PaginationContext = React.createContext<PaginationType>({
  limit: 20,
  offset: 0,
  previousPage: () => {},
  nextPage: () => {},
});

const PaginationContextProvider: React.FC<PaginationProps> = ({ children }) => {
  const [contentPerPage, setContentPerPage] = useState(20);
  const [offset, setOffset] = useState(0);

  const previousPage = () => {
    setOffset((previous) => Math.max(previous - contentPerPage, 0));
  };

  const nextPage = () => {
    setOffset((previous) => previous + contentPerPage);
  };

  const paginationContext: PaginationType = {
    limit: contentPerPage,
    offset: offset,
    previousPage: previousPage,
    nextPage: nextPage,
  };

  return (
    <PaginationContext.Provider value={paginationContext}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;
