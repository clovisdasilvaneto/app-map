import Input from "../../../components/Input";
import mediator from "../../../../mediator";
import List from "./List";
import searchModule from "../../../../modules/search";
import debounce from "lodash.debounce";
import { TPage } from "../../../../types";
import { EEvents } from "../../../../mediator/constants";

interface IAppMapInputEvent extends InputEvent {
  target: HTMLInputElement;
}

const DefaultContainer = (appState, container: HTMLElement) => {
  const { filterPagesByKeywords, ...search } = searchModule();
  const section = document.createElement("section");
  let input, listContainer;

  section.classList.add("default-container");
  section.innerHTML = `
    <article>
      <h1>AppMap</h1>
    </article>
  `;

  const attachSearch = () => {
    search.initialize();

    input = Input({
      onKeyDown: debounce(
        (e: IAppMapInputEvent) => filterPagesByKeywords(e.target.value),
        200
      ),
      container: section,
      placeholder: "Search navigation links"
    });

    input.attachStyles();
    input.render();
  };

  const dettachSearch = () => {
    search.dettach();

    input?.dettachStyles();
    input?.dettach();
  };

  const attachList = (pages: TPage[]) => {
    if (listContainer) dettachList();

    listContainer = List({ container: section, pages });
    listContainer.attachStyles();
    listContainer.attach();
  };

  const dettachList = () => {
    listContainer?.dettachStyles();
    listContainer?.dettach();
  };

  const attach = () => {
    mediator.on(EEvents.ChangePages, attachList);

    attachSearch();
    attachList(appState.pages);

    container.appendChild(section);
  };

  const dettach = () => {
    mediator.off(EEvents.ChangePages, attachList);

    dettachSearch();
    dettachList();

    container.removeChild(section);
  };

  return {
    attach,
    dettach
  };
};

export default mediator.connect(DefaultContainer);
