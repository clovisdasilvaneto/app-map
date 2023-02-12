//TODO: replace for the original event emitter
const mitt = () => null;

const emitter = mitt();

type TConnectModule = (...props: any) => any;

const mediator = (() => {
  let states = {
    pages: [],
    filter: {}
  };

  const initialize = () => {
    // TODO: type it properly late
    emitter.on("changePages", (data: any) => (states.pages = data));
    emitter.on("changesFilter", (data: any) => (states.filter = data));
  };

  // TODO: type it properly later
  const on = (eventName: string, cb: (props: any) => null) => {
    emitter.on(eventName, cb);
  };

  // TODO: type it properly later
  const off = (eventName: string, cb: (props: any) => null) => {
    emitter.off(eventName, cb);
  };

  const dispatch = (eventName, data) => {
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

export default mediator;
