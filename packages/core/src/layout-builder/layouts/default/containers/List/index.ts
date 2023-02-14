import ListItem from "../../../../components/ListItem";
import { withCSS } from "../../../../decorators";
import styles from "./styles";

const MOCKED_PAGES = Array.from({ length: 100 }, () => ({
  name: "Home " + Date.now(),
  description: "some",
  url: "http://google.com",
  keywords: ["test"]
}));

const List = (container: HTMLElement) => {
  const listContainer = document.createElement("div");
  let items = [];

  listContainer.innerHTML = `
        <h2 class="app-map-list-result">Result:</h2>
        <div class="app-map-default-list"></div>
  `;

  const attachPages = () => {
    const container = listContainer.querySelector(".app-map-default-list");

    items = MOCKED_PAGES.map((page, index) => {
      const item = ListItem({
        href: page.url,
        label: page.name,
        container,
        active: page?.states?.active
      });

      if (!index) item.attachStyles();

      item.render();

      return item;
    });
  };

  const attach = () => {
    attachPages();

    container.appendChild(listContainer);
  };

  const dettach = () => {
    items.forEach((item, index) => {
      if (!index) item.dettachStyles();

      item.dettach();
    });

    container.removeChild(listContainer);
  };

  return {
    attach,
    dettach
  };
};

export default withCSS(List, styles);
