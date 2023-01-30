import { constructCard } from "../../globalVariables/globalVariables.js";
import { requestPokeApi } from "../../pokemons/getPokemons.js";
import Component from "../Component/Component.js";
class PageComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "container", "div");
  }

  async render() {
    super.render();

    await constructCard(requestPokeApi, this.domElement);
  }
}

export default PageComponent;
