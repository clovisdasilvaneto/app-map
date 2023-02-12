import mediator from "../mediator";
import { IAppMapOps } from "../types";

function layoutBuilder(appState, strategy) {
  const apply = (appConfig: IAppMapOps) => {
    const container = document.querySelector(appConfig.container);

    strategy.initialize(container);
    strategy.render();
  };

  return {
    apply
  };
}

export default mediator.connect(layoutBuilder);
