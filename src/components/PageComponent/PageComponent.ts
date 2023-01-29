import pokemonList from "../../pokemons/getPokemons.js";
import type { PokemonData } from "../../pokemons/types";
import Component from "../Component/Component.js";
import { PokemonBasicCardComponent } from "../PokemonBasicCard/PokemonBasicCard.js";

class PageComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "container", "div");
  }

  render() {
    super.render();

    setTimeout(() => {
      pokemonList.forEach((pokemon: PokemonData) => {
        new PokemonBasicCardComponent(this.domElement, pokemon).render();
      });
    }, 3000);
  }
}

export default PageComponent;
