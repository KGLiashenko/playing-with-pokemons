import Pokemons from "@/components/Pokemons";
import { PokemonsType } from "@/models/types";
import { getPokemons } from "@/graphql/get-pokemons";

export default function Home(props: PokemonsType) {
  return <Pokemons pokemons={props.pokemons} />;
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
