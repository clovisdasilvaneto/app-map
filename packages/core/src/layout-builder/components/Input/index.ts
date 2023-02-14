import { withCSS } from "../../decorators";
import styles from "./style";

const Input = ({ onChange, placeholder, container }) => {
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("app-map-input-container");

  inputContainer.innerHTML = `
    <input placeholder="${placeholder}" class="app-map-input" />
  `;

  const render = () => {
    inputContainer.querySelector("input").addEventListener("change", onChange);

    container.appendChild(inputContainer);
  };

  const dettach = () => {
    inputContainer
      .querySelector("input")
      .removeEventListener("change", onChange);

    container.removeChild(inputContainer);
  };

  return {
    render,
    dettach
  };
};

export default withCSS(Input, styles);
