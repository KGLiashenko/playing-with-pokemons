import Head from "next/head";
import { GetStaticProps } from "next";

import {
  getPokemonsDetails,
  getPokemonsGeneration1,
} from "@/graphql/get-pokemons";
import { PokemonDetailType } from "@/models/types";
import PokemonDetails from "@/components/PokemonDetails";

const Details: React.FC<PokemonDetailType> = ({ details }) => {
  return (
    <>
      <Head>
        <title>Pokémon Detail</title>
        <meta name="description" content={`Playing with ${details[0]?.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PokemonDetails details={details} />
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
  const pokemonId = context.params!.pokemonId;

  let id: number;
  if (pokemonId) {
    if (pokemonId instanceof Array<string>) id = +pokemonId[0];
    else id = +pokemonId;

    const data = getPokemonsDetails({ id: id });
    const details = (await data).details.nodes;

    console.log(data);

    return {
      props: {
        details: details,
      },
    };
  }

  return {
    props: {
      details: [],
    },
  };
};

export default Details;
