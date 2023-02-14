import Input from "../../../components/Input";
import List from "./List";

const DefaultContainer = (container: HTMLElement) => {
  const section = document.createElement("section");
  let input, listContainer;

  section.classList.add("default-container");
  section.innerHTML = `
    <article>
      <h1>AppMap</h1>
    </article>
  `;

  const attachSearch = () => {
    input = Input({
      onChange: () => null,
      container: section,
      placeholder: "Search navigation links"
    });

    input.attachStyles();
    input.render();
  };

  const attach = () => {
    attachSearch();

    listContainer = List(section);
    listContainer.attachStyles();
    listContainer.attach();

    container.appendChild(section);
  };

  const dettach = () => {
    input?.dettachStyles();
    input?.dettach();

    listContainer?.dettachStyles();
    listContainer?.dettach();

    container.removeChild(section);
  };

  return {
    attach,
    dettach
  };
};

export default DefaultContainer;
