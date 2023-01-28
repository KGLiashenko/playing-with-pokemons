import Head from "next/head";
import { Inter } from "@next/font/google";
import { gql, request } from "graphql-request";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export type PokemonsType = {
  pokemons: {
    id: number;
    name: string;
  }[];
};

const query = gql`
  query GetPokemons {
    pokemons: pokemon_v2_pokemon(limit: 20, offset: 0) {
      id
      name
    }
  }
`;

export default function Home(props: PokemonsType) {
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
        <div className={styles.grid}></div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { pokemons } = await request<PokemonsType>(
    "https://beta.pokeapi.co/graphql/v1beta/",
    query
  );
  console.log(pokemons);

  return {
    props: {
      pokemons: pokemons,
    },
  };
}
