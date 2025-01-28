import clsx from "clsx";
import { InputVariant, InputSize } from "../components/Input";

export function getInputVariant(variant: InputVariant) {
  return clsx({
    "": variant === "base",
    "ui-input-primary": variant === "primary",
    "ui-input-secondary": variant === "secondary",
    "ui-input-accent": variant === "accent",
    "ui-input-success": variant === "success",
    "ui-input-info": variant === "info",
    "ui-input-warning": variant === "warning",
    "ui-input-error": variant === "error",
    "ui-input-ghost": variant === "ghost",
  });
}

export function getInputSize(size: InputSize) {
  return clsx({
    "ui-input-xs": size === "xs",
    "ui-input-sm": size === "sm",
    "ui-input-md": size === "md",
    "ui-input-lg": size === "lg",
  });
}

interface InputClassParams {
  variant: InputVariant;
  size: InputSize;
  bordered: boolean;
  prefix?: string;
}

export function getInputClasses({ variant, size, bordered }: InputClassParams) {
  return clsx(
    "ui-input safari-only:ui-text-base",
    getInputVariant(variant),
    getInputSize(size),
    {
      "ui-input-bordered": bordered,
    }
  );
}
