import clsx from "clsx";
import { ButtonSize, ButtonVariant } from "../components";
import { CLASSNAME_PREFIX } from "../prefix";

interface ButtonClassParams {
  size?: ButtonSize;
  variant: ButtonVariant;
  outlined?: boolean;
  prefix?: string;
}

export function getButtonVariant(
  variant: ButtonVariant,
  prefix = CLASSNAME_PREFIX
) {
  return `${prefix}btn-${variant}`;
}

/** Create the styling for a custom component that has button-like appearance */
export function getButtonClasses({
  variant,
  size = "md",
  outlined,
  prefix = CLASSNAME_PREFIX,
}: ButtonClassParams) {
  const btnClass = `${prefix}btn`;
  const sizeClass = `${prefix}btn-${size}`;
  const outlinedClass = `${prefix}btn-outline`;

  return clsx(btnClass, getButtonVariant(variant), sizeClass, {
    [outlinedClass]: outlined,
  });
}
