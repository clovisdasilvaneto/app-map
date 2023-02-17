import { withCSS } from "../../decorators";
import styles from "./style";

const ListItem = ({ onClick, href, label, container, active }) => {
  let instance: HTMLButtonElement;
  const listItemContainer = document.createElement("div");
  listItemContainer.classList.add("app-map-page-link-container");
  listItemContainer.innerHTML = `
    <a href="${href}" class="app-map-page-link ${
    active ? "app-map-page-link-active" : ""
  }">${label}</a>
  `;

  const render = () => {
    instance = container.querySelector("a");

    if (onClick) instance.addEventListener("click", onClick);

    container.appendChild(listItemContainer);
  };

  const dettach = () => {
    if (onClick) instance.removeEventListener("click", onClick);
  };

  return {
    render,
    dettach
  };
};

export default withCSS(ListItem, styles);
