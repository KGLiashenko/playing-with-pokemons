import Head from "next/head";
import { Inter } from "@next/font/google";

import styles from "@/styles/Home.module.css";
import PokemonsList from "./PokemonsList";
import { PokemonsType } from "@/models/types";

const inter = Inter({ subsets: ["latin"] });

const Pokemons: React.FC<PokemonsType> = ({ pokemons }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="Playing with pokemons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>Pokemons</h1>
        </div>
        <PokemonsList pokemons={pokemons} />
      </main>
    </>
  );
};

export default Pokemons;
