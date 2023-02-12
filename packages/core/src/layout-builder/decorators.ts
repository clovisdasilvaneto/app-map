import cssInject from "css-inject";

// TODO: type it better late
export const withCSS = (module: any, rules: string) => {
  let removeRules: Function;

  const attachStyles = () => {
    removeRules = cssInject(rules);
  };

  const dettachStyles = () => {
    if (!removeRules)
      throw new Error("dettach rules can not be called before attach");

    removeRules();
  };

  return (...deeps: any) => {
    const moduleInstance = module(...deeps);

    return {
      attachStyles,
      dettachStyles,
      ...moduleInstance
    };
  };
};
