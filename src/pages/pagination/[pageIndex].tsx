import { GetStaticProps } from "next";
import Head from "next/head";

import Pokemons from "@/components/Pokemons";
import { getPokemons } from "@/graphql/get-pokemons";
import {
  PageIndexParamsType,
  PathsType,
  PokemonPaginationType,
} from "@/models/types";
import { getValidParamValue } from "@/utils/utils";

export default function PokemonPagination({
  pokemons,
  pageIndex,
}: PokemonPaginationType) {
  return (
    <>
      <Head>
        <title>Pokémon App</title>
        <meta name="description" content="Playing with pokémons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Pokemons pokemons={pokemons} pageIndex={pageIndex} />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths: PathsType = [];
  for (let index = 0; index < 11; index++) {
    const param: PageIndexParamsType = { pageIndex: index.toString() };
    paths.push({ params: param });
  }

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageIndex = getValidParamValue(context.params?.pageIndex);

  const data = getPokemons({ limit: 20, offset: pageIndex * 20 });
  const pokemons = (await data).pokemons;

  return {
    props: {
      pokemons: pokemons,
      pageIndex: pageIndex,
    },
  };
};
