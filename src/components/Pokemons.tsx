import { Inter } from "@next/font/google";

import PokemonsList from "./PokemonsList";
import Pagination from "./Pagination";
import { PokemonPaginationType } from "@/models/types";

const inter = Inter({ subsets: ["latin"] });

const Pokemons: React.FC<PokemonPaginationType> = ({ pokemons, pageIndex }) => {
  let content = (
    <>
      <PokemonsList pokemons={pokemons} />
      <Pagination
        pageIndex={pageIndex}
        isPreviousDisabled={pageIndex === 0}
        isNextDisabled={false}
      />
    </>
  );

  return (
    <div className="container justify-content-center text-center py-4">
      <h1 className={`${inter.className} text-center p-4`}>Pokemons</h1>
      {content}
    </div>
  );
};

export default Pokemons;
