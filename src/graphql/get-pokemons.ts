import request from "graphql-request";
import {
  GetPokemonsQuery,
  GetPokemonsQueryVariables,
  GetPokemonsDocument,
} from "./graphql-operations";

export const getPokemons = async ({
  limit,
  offset,
}: GetPokemonsQueryVariables) => {
  return await request<GetPokemonsQuery>(
    "https://beta.pokeapi.co/graphql/v1beta/",
    GetPokemonsDocument,
    {
      limit: limit,
      offset: offset,
    }
  );
};
