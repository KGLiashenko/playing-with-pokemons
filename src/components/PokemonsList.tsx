import Link from "next/link";

import styles from "@/styles/Home.module.css";
import PokemonItem from "./PokemonItem";
import { PokemonsType } from "@/models/types";

const PokemonsList: React.FC<PokemonsType> = ({ pokemons }) => {
  return (
    <div className={styles.grid}>
      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} href={"/" + pokemon.id}>
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
