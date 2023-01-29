import Head from "next/head";
import { Inter } from "@next/font/google";

import styles from "@/styles/Home.module.css";
import {
  getPokemonsDetails,
  getPokemonsGeneration1,
} from "@/graphql/get-pokemons";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { PokemonDetailType } from "@/models/types";

const inter = Inter({ subsets: ["latin"] });

const Details: React.FC<PokemonDetailType> = ({ details }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pokemon Detail</title>
        <meta name="description" content="Playing with pokemons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.center}>
        <h1 className={inter.className}>
          Details of pokemon {details[0]?.name}
        </h1>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = getPokemonsGeneration1();
  const data = (await response).generation1;

  const paths = data.map((item) => ({
    params: { pokemonId: item.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = getPokemonsDetails({ id: 1 });
  const details = (await data).details.nodes;

  console.log(details);

  return {
    props: {
      details: details,
    },
  };
};

export default Details;
