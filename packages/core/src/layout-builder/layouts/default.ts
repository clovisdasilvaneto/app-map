import Button from "../components/Button";

function defaultLayout() {
  let container = null;

  const initialize = (layoutContainer: string) => {
    container = layoutContainer;
  };

  const renderList = () => `<p>here will be the list</p>`;
  const renderSearch = () => `<p>here will be the search</p>`;

  const getTemplate = () => `<div>
    ${renderList()}
    ${renderSearch()}
  </div>`;

  const appendTemplate = () => {
    const button = container.querySelector("button");

    container.removeChild(button);
    container.innerHTML = getTemplate();
  };

  const appendButton = () => {
    const button = Button({
      onClick: appendTemplate,
      container
    });

    button.render();
  };

  const render = () => {
    appendButton();
  };

  return {
    initialize,
    render
  };
}

export default defaultLayout;
