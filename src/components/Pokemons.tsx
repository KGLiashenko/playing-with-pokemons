import Head from "next/head";
import { Inter } from "@next/font/google";

import styles from "@/styles/Home.module.css";
import PokemonsList from "./PokemonsList";
import { PokemonsType } from "@/models/types";

const inter = Inter({ subsets: ["latin"] });

const Pokemons: React.FC<PokemonsType> = ({ pokemons }) => {
  return (
    <>
      <div className={styles.center}>
        <h1 className={inter.className}>Pokemons</h1>
      </div>
      <PokemonsList pokemons={pokemons} />
    </>
  );
};

export default Pokemons;
