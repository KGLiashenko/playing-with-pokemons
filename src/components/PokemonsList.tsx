import { Inter } from "@next/font/google";
import Link from "next/link";

import PokemonItem from "./PokemonItem";
import { PokemonsType } from "@/models/types";

const inter = Inter({ subsets: ["latin"] });

const PokemonsList: React.FC<PokemonsType> = ({ pokemons }) => {
  return (
    <div className="row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-lg-3">
      {pokemons.map((pokemon) => (
        <Link
          key={pokemon.id}
          href={"/details/" + pokemon.id}
          className={`${inter.className} text-decoration-none text-reset`}
        >
          <PokemonItem
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          />
        </Link>
      ))}
    </div>
  );
};

export default PokemonsList;
