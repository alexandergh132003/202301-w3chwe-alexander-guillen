import type { PokemonCollection, PokemonData } from "./types.js";

const requestPokeApi = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200";

const pokemonList = [] as any[];

const getPokemonCollection = async () => {
  const response = await fetch(requestPokeApi);
  const pokemonStore = (await response.json()) as PokemonCollection;
  return pokemonStore;
};

const getPokemonData = async (url: string): Promise<PokemonData> => {
  const response = await fetch(url);
  const pokemonData = (await response.json()) as PokemonData;
  return pokemonData;
};

(async () => {
  const { results } = await getPokemonCollection();

  results.forEach(async ({ url }, index) => {
    pokemonList[index] = await getPokemonData(url);
  });
})();

export default pokemonList;
