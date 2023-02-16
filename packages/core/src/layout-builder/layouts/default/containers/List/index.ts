import { TPage } from "../../../../../types";
import ListItem from "../../../../components/ListItem";
import { withCSS } from "../../../../decorators";
import styles from "./styles";

interface TListProps {
  container: HTMLElement;
  pages: TPage[];
}

const List = ({ container, pages }: TListProps) => {
  const listContainer = document.createElement("div");
  let items = [];

  listContainer.innerHTML = `
        <h2 class="app-map-list-result">Result:</h2>
        <div class="app-map-default-list"></div>
  `;

  const renderItem = (pages: TPage[], container: Element): TPage[] => {
    return pages.reduce((acc: TPage[], page: TPage) => {
      const item = ListItem({
        href: page.url,
        label: page.name,
        container,
        active: page?.states?.active
      });

      if (page.children) {
        acc.concat(renderItem(page.children, container));
      }

      item.render();

      acc.push({
        ...item,
        children: null
      });

      return acc;
    }, []);
  };

  const attachPages = () => {
    const container = listContainer.querySelector(".app-map-default-list");

    items = renderItem(pages, container);

    if (items?.length) {
      items[0].attachStyles();
    }
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
