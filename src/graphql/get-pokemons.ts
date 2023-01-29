import request from "graphql-request";
import {
  GetPokemonsQuery,
  GetPokemonsQueryVariables,
  GetPokemonsDocument,
  GetPokemonsGeneration1Query,
  GetPokemonsGeneration1Document,
  GetPokemonDetailsQueryVariables,
  GetPokemonDetailsDocument,
  GetPokemonDetailsQuery,
} from "./graphql-operations";

const BASE_URL = "https://beta.pokeapi.co/graphql/v1beta/";

export const getPokemons = async ({
  limit,
  offset,
}: GetPokemonsQueryVariables) => {
  return await request<GetPokemonsQuery>(BASE_URL, GetPokemonsDocument, {
    limit: limit,
    offset: offset,
  });
};

export const getPokemonsGeneration1 = async () => {
  return await request<GetPokemonsGeneration1Query>(
    BASE_URL,
    GetPokemonsGeneration1Document
  );
};

export const getPokemonsDetails = async ({
  id,
}: GetPokemonDetailsQueryVariables) => {
  return await request<GetPokemonDetailsQuery>(
    BASE_URL,
    GetPokemonDetailsDocument,
    {
      id: id,
    }
  );
};
