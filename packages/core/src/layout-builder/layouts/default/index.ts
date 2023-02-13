import Button from "../../components/Button";
import { withCSS } from "../../decorators";
import defaultContainer from "./container";
import css from "./styles";

function defaultLayout() {
  let appContainer;
  let container;
  let isOpened: boolean;

  const initialize = (layoutContainer: string) => {
    appContainer = layoutContainer;
    container = defaultContainer(appContainer);
  };

  const toggleContainer = (e) => {
    e.preventDefault();

    if (!isOpened) {
      container.attach();
    } else {
      container.dettach();
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