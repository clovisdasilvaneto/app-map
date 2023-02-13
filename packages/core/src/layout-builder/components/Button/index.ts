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
    font-family: 'Inter', sans-serif;
  }
`;

const Button = ({ onClick, container }) => {
  let instance: HTMLButtonElement;
  const template = `
    <button class="app-map-button">
     <svg fill="none" viewBox="0 0 19 17" width="19" height="17" ><path fill="url(#a)" d="M0 0h19v17H0z"/><defs><pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#b" transform="matrix(.015 0 0 .01714 -.25 -.357)"/></pattern><image xlink:href="data:image/png;base64,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" id="b" width="100" height="100"/></defs></svg>
    </button>
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
