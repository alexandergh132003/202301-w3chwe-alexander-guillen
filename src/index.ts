import ButtonContainerComponent from "./components/ButtonComponent/ButtoComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";

const header = new HeaderComponent(document.body);

header.render();

(async () => {
  const container = new PageComponent(document.body);
  await container.render();
})();

const buttonContainer = new ButtonContainerComponent(document.body);

buttonContainer.render();
