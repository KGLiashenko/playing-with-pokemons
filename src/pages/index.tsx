import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Pokemons from "@/components/Pokemons";
import { PokemonsType } from "@/models/types";
import { getPokemons } from "@/graphql/get-pokemons";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function Home(props: PokemonsType) {
  return (
    <>
      <Head>
        <title>Pokémon App</title>
        <meta name="description" content="Playing with pokémons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Pokemons pokemons={props.pokemons} />
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientProvider>
    </>
  );
}

export async function getStaticProps() {
  const data = getPokemons({ limit: 20, offset: 0 });
  const pokemons = (await data).pokemons;

  return {
    props: {
      pokemons: pokemons,
    },
  };
}
