import clsx from "clsx";
import { InputVariant, InputSize } from "../components/Input";
import { CLASSNAME_PREFIX } from "../prefix";

export function getInputVariant(
  variant: InputVariant,
  prefix = CLASSNAME_PREFIX
) {
  return `${prefix}input-${variant}`;
}

interface InputClassParams {
  variant: InputVariant;
  size: InputSize;
  bordered: boolean;
  prefix?: string;
}

export function getInputClasses({
  variant,
  size,
  bordered,
  prefix = CLASSNAME_PREFIX,
}: InputClassParams) {
  const inputClass = `${prefix}input`;
  const sizeClass = `${prefix}input-${size}`;
  const borderedClass = `${prefix}input-bordered`;

  return clsx(inputClass, getInputVariant(variant), sizeClass, {
    [borderedClass]: bordered,
  });
}
