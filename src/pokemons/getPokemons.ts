import { pokemonCollection } from "../globalVariables/globalVariables.js";
import type { PokemonCollection, PokemonData } from "./types.js";

export const requestPokeApi = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonCollection = async (url: string) => {
  const response = await fetch(url);
  const pokemonStore = (await response.json()) as PokemonCollection;

  pokemonCollection.next = pokemonStore.next;
  pokemonCollection.previous = pokemonStore.previous;

  return pokemonStore;
};

const getPokemonData = async (url: string): Promise<PokemonData> => {
  const response = await fetch(url);
  const pokemonData = (await response.json()) as PokemonData;
  return pokemonData;
};

export const getPokemonList = async (requestUrl: string) => {
  const { results } = await getPokemonCollection(requestUrl);
  const pokemonPromises = results.map(async ({ url }) => getPokemonData(url));
  const pokemonList = await Promise.all(pokemonPromises);
  return pokemonList;
};
