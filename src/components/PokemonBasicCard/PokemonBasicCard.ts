import Component from "../Component/Component.js";
import type { PokemonData } from "../../pokemons/types.js";

export class PokemonBasicCardComponent extends Component {
  private readonly pokemon: PokemonData;

  constructor(parentElement: HTMLElement, pokemon: PokemonData) {
    super(parentElement, "pokemon-card", "div");
    this.pokemon = pokemon;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
      <img src="${this.pokemon.sprites.other["official-artwork"].front_default}" alt="${this.pokemon.name}" class="pokemon-image" width="200" height="200">
  
      <div class="pokemon-card-basic-info">
        <span class="pokemon-number">N.º ${this.pokemon.id}</span>
        <h2 class="pokemon-name">${this.pokemon.name}</h2>
        <span class="pokemon-types">
        </span>  
      </div>
    `;

    this.pokemon.types.forEach(({ type: { name } }) => {
      const parentElement = this.domElement.querySelector(".pokemon-types");
      const pokemonType = document.createElement("span");
      pokemonType.textContent = name;
      parentElement.appendChild(pokemonType);
    });
  }
}
