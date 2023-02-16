import { withCSS } from "../../decorators";
import styles from "./style";

const Input = ({ onKeyDown, placeholder, container }) => {
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("app-map-input-container");

  inputContainer.innerHTML = `
    <input placeholder="${placeholder}" class="app-map-input" />
  `;

  const render = () => {
    inputContainer
      .querySelector("input")
      .addEventListener("keydown", onKeyDown);

    container.appendChild(inputContainer);
  };

  const dettach = () => {
    inputContainer
      .querySelector("input")
      .removeEventListener("keyDown", onKeyDown);

    container.removeChild(inputContainer);
  };

  return {
    render,
    dettach
  };
};

export default withCSS(Input, styles);
