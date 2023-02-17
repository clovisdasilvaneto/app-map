import Button from "../../components/Button";
import { withCSS } from "../../decorators";
import defaultContainer from "./containers";
import css from "./styles";

function defaultLayout() {
  let appContainer: Element;
  let container;
  let isOpened: boolean;

  const initialize = (layoutContainer: Element) => {
    appContainer = layoutContainer;
    container = defaultContainer(appContainer);
  };

  const toggleContainer = (e) => {
    e.preventDefault();

    if (!isOpened) {
      container.attach();
      appContainer.classList.add("app-map-overlay");
    } else {
      container.dettach();
      appContainer.classList.remove("app-map-overlay");
    }

    isOpened = !isOpened;
  };

  const appendButton = () => {
    const button = Button({
      onClick: toggleContainer,
      container: appContainer
    });

    button.attachStyles();
    button.render();
  };

  const render = appendButton;

  return {
    initialize,
    render
  };
}

export default withCSS(defaultLayout, css);
