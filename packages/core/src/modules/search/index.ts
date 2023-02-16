import mediator from "../../mediator";
import { EEvents } from "../../mediator/constants";
import { TPage } from "../../types";

function searchModule(appState) {
  let pages = appState.pages;

  const initialize = () => {};

  const dettach = () => {};

  const applyFilter = (value: string, pages: TPage[]): TPage[] => {
    const filteredPages = pages.reduce((acc, page: TPage) => {
      let filteredChildren: TPage[];

      if (page.children) filteredChildren = applyFilter(value, page.children);

      const hasKeywords = page.keywords.some((keyword) =>
        new RegExp(`${value}`).test(keyword)
      );

      if (hasKeywords) {
        page.children = filteredChildren;

        acc.push(page);
      } else if (filteredChildren) {
        acc = acc.concat(filteredChildren);
      }

      return acc;
    }, []);

    return filteredPages;
  };

  const filterPagesByKeywords = (value: string) => {
    mediator.dispatch(EEvents.ChangeFilter, value);

    const newPages = applyFilter(value, pages);

    mediator.dispatch(EEvents.ChangePages, newPages);
  };

  return {
    initialize,
    dettach,
    filterPagesByKeywords
  };
}

export default mediator.connect(searchModule);
