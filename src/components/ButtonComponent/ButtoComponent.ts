import {
  constructCard,
  pokemonCollection,
} from "../../globalVariables/globalVariables.js";
import { getPokemonList } from "../../pokemons/getPokemons.js";
import Component from "../Component/Component.js";

class ButtonContainerComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "button-container", "div");
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
      <button class="previous"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
    `;

    this.passPage();
  }

  passPage() {
    const previousButton = this.domElement.querySelector(".previous");
    const nextButton = this.domElement.querySelector(".next");
    const container: HTMLElement = document.querySelector(".container");

    previousButton.addEventListener("click", async () => {
      if (pokemonCollection.previous) {
        container.innerHTML = "";

        await constructCard(pokemonCollection.previous, container);
      }
    });

    nextButton.addEventListener("click", async () => {
      if (pokemonCollection.next) {
        container.innerHTML = "";

        await constructCard(pokemonCollection.next, container);
      }
    });
  }
}

export default ButtonContainerComponent;
