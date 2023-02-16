import { IAppMapOps } from "../types";

function layoutBuilder(strategy) {
  const apply = (appConfig: IAppMapOps) => {
    const container = document.querySelector(appConfig.container);

    strategy.initialize(container);
    strategy.attachStyles();
    strategy.render();
  };

  return {
    apply
  };
}

export default layoutBuilder;
