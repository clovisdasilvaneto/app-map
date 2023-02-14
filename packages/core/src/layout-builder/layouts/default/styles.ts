import { fonts, variables } from "./theme";

const css = `
  ${fonts}
  ${variables}

  #app-map-container, #app-map-container * {
    box-sizing: border-box;
    color: var(--app-map-default-black);
  }

  #app-map-container {
    position: fixed;
    right: 0;
    width: 100%;
    bottom: 2rem;
    max-width: 632px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    padding:0 2rem;

    /* to avoid another component be on top of app-map components */
    z-index: 9999;
  }

  #app-map-container button {
    position: relative;
    z-index: 2;
  }

  #app-map-container:before {
    position: fixed;
    z-index: 1;
    background: var(--app-map-default-overlay);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
  }

  #app-map-container .default-container {
    position: relative;
    border-radius: 9px;
    z-index: 9;
    background: var(--app-map-default-light);
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  #app-map-container .default-container h1 {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: min(18px, 4.5vw);
    line-height: 22px;
    margin: 0 0 1rem;
    text-align: center;
  }

  #app-map-container .app-map-input-container {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

export default css;
