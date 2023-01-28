import { Inter } from "@next/font/google";
import { gql, request } from "graphql-request";
import Pokemons from "@/components/Pokemons";
import { PokemonsType } from "@/models/types";

const inter = Inter({ subsets: ["latin"] });

const query = gql`
  query GetPokemons {
    pokemons: pokemon_v2_pokemon(limit: 20, offset: 0) {
      id
      name
    }
  }
`;

export default function Home(props: PokemonsType) {
  return <Pokemons pokemons={props.pokemons} />;
}

export async function getStaticProps() {
  const { pokemons } = await request<PokemonsType>(
    "https://beta.pokeapi.co/graphql/v1beta/",
    query
  );

  return {
    props: {
      pokemons: pokemons,
    },
  };
}
