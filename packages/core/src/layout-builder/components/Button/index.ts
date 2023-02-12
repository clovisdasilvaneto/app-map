import { withCSS } from "../../decorators";

const css = `
  .app-map-button {
    width: 40px;
    height: 40px;
    background: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;

const Button = ({ onClick, container }) => {
  let instance: HTMLButtonElement;
  const template = `
    <button class="app-map-button">C</button>
  `;

  const render = () => {
    container.innerHTML = template;

    instance = container.querySelector("button");
    instance.addEventListener("click", onClick);
  };

  const dettach = () => {
    instance.removeEventListener("click", onClick);
  };

  return {
    css,
    render,
    dettach
  };
};

export default withCSS(Button, css);
