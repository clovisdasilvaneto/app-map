export enum EAppMapLayout {
  DEFAULT
}

export type TPage = {
  name?: string;
  description?: string;
  url: string;
  keywords: string[];
  children?: TPage[];
  states?: {
    active?: boolean;
  };
};

export type TAppMappAPI = {
  addRootPage: () => void;
};

export type TMapButtonProps = {
  onClick: () => null;
};

export interface IAppMapOps {
  pages: TPage[];
  container?: string;
  layout?: "default";
}
