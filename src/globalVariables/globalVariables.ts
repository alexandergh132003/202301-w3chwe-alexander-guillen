import { PokemonBasicCardComponent } from "../components/PokemonBasicCard/PokemonBasicCard.js";
import { getPokemonList } from "../pokemons/getPokemons.js";

export const pokemonCollection = {
  next: "",
  previous: "",
};

export const constructCard = async (url: string, element: HTMLElement) => {
  const pokemonList = await getPokemonList(url);

  await Promise.all(pokemonList);

  for (const pokemon of pokemonList) {
    const card = new PokemonBasicCardComponent(element, pokemon);
    card.render();
  }
};
