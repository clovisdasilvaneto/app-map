const defaultContainer = (container: HTMLElement) => {
  const section = document.createElement("section");
  const renderList = () => `<p>here will be the list</p>`;
  const renderSearch = () => `<p>here will be the search</p>`;

  const getTemplate = () => `<article class="default-container">
    ${renderList()}
    ${renderSearch()}
  </article>`;

  const attach = () => {
    section.innerHTML = getTemplate();

    container.appendChild(section);
  };

  const dettach = () => {
    container.removeChild(section);
  };

  return {
    attach,
    dettach
  };
};

export default defaultContainer;
