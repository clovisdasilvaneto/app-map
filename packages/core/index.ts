import layoutBuilder from "./src/layout-builder";
import defaultLayout from "./src/layout-builder/layouts/default";
import { IAppMapOps } from "./src/types";

const AppMap = (config: IAppMapOps) => {
  // TODO: receive the layout type from the config
  const layout = layoutBuilder(defaultLayout());

  // Apply layout modules
  layout.apply(config);
};

export default AppMap;
