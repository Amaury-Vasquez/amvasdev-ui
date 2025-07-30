import clsx from "clsx";

const LOADING_TYPE_MAP = {
  spin: "ui:loading-spinner",
  dots: "ui:loading-dots",
  ring: "ui:loading-ring",
  ball: "ui:loading-ball",
  bars: "ui:loading-bars",
  infinity: "ui:loading-infinity",
};

export type LoadingType = keyof typeof LOADING_TYPE_MAP;

const LOADING_SIZES_MAP = {
  xs: "ui:loading-xs",
  sm: "ui:loading-sm",
  md: "ui:loading-md",
  lg: "ui:loading-lg",
};

export type LoadingSize = keyof typeof LOADING_SIZES_MAP;

export interface LoadingClassesArgs {
  type?: LoadingType;
  size?: LoadingSize;
}

export const getLoadingClasses = ({ type, size }: LoadingClassesArgs) =>
  clsx(type && LOADING_TYPE_MAP[type], size && LOADING_SIZES_MAP[size]);
