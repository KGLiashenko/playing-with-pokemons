import Head from "next/head";
import { Inter } from "@next/font/google";

import styles from "@/styles/Home.module.css";
import { getPokemonsGeneration1 } from "@/graphql/get-pokemons";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Details: React.FC = () => {
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
          Details of pokemon {router.query.pokemonId}
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

export async function getStaticProps() {
  return {
    props: {
      name: "Pokemon",
    },
  };
}

export default Details;
