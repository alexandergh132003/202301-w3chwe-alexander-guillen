import Component from "../Component/Component.js";
class HeaderComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "header", "header");
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
      <img src="media/pokemon-logo.svg" alt="pokemon logo" width="150" height="150"/>
      <i class="fas fa-bars"></i>
      `;
  }
}

export default HeaderComponent;
