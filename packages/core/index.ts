import layoutBuilder from "./src/layout-builder";
import defaultLayout from "./src/layout-builder/layouts/default";
import mediator from "./src/mediator";
import { EEvents } from "./src/mediator/constants";
import { IAppMapOps } from "./src/types";

const AppMap = (config: IAppMapOps) => {
  if (!config.pages)
    throw new Error("pages should be provided to appMap instance");

  mediator.dispatch(EEvents.ChangePages, config.pages);

  // TODO: receive the layout type from the config
  const layout = layoutBuilder(defaultLayout());

  // Apply layout modules
  layout.apply(config);
};

export { IAppMapOps };

export default AppMap;
