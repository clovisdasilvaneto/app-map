import { EEvents } from "./constants";
import emitter from "./emitter";

type TConnectModule = (...props: any) => any;

const mediator = (() => {
  let hasStarted = false;
  let states = {
    pages: [],
    filter: {}
  };

  const initialize = () => {
    if (hasStarted) return;

    // TODO: type it properly late
    emitter.on(EEvents.ChangePages, (data: any) => {
      states.pages = data;
    });
    emitter.on(EEvents.ChangeFilter, (data: any) => (states.filter = data));

    hasStarted = true;
  };

  // TODO: type it properly later
  const on = (eventName: EEvents, cb: (props: any) => unknown) => {
    emitter.on(eventName, cb);
  };

  // TODO: type it properly later
  const off = (eventName: EEvents, cb: (props: any) => unknown) => {
    emitter.off(eventName, cb);
  };

  const dispatch = (eventName: EEvents, data: unknown) => {
    emitter.emit(eventName, data);
  };

  // TODO: type it better later
  const connect =
    (module: TConnectModule) =>
    (...deeps: any[]) => {
      return module(states, ...deeps);
    };

  return {
    on,
    off,
    initialize,
    dispatch,
    connect
  };
})();

mediator.initialize();

export default mediator;
