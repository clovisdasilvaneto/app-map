const defaultContainer = (container: HTMLElement) => {
  const section = document.createElement("section");
  const renderList = () => `<p>here will be the list</p>`;
  const renderSearch = () => `<p>here will be the search</p>`;

  section.classList.add("default-container");

  const getTemplate = () => `
    <article>
      <h1>AppMap</h1>

      ${renderList()}
      ${renderSearch()}
    </article>
  `;

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
