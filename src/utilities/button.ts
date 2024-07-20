import clsx from "clsx";
import { ButtonSize, ButtonVariant } from "../components";

interface ButtonClassParams {
  size?: ButtonSize;
  variant: ButtonVariant;
  outlined?: boolean;
  prefix?: string;
}

export function getButtonVariant(variant: ButtonVariant) {
  return clsx({
    "": variant === "none",
    "ui-btn-primary": variant === "primary",
    "ui-btn-secondary": variant === "secondary",
    "ui-btn-accent": variant === "accent",
    "ui-btn-success": variant === "success",
    "ui-btn-info": variant === "info",
    "ui-btn-warning": variant === "warning",
    "ui-btn-error": variant === "error",
  });
}

export function getButtonSize(size: ButtonSize) {
  return clsx({
    "ui-btn-xs": size === "xs",
    "ui-btn-sm": size === "sm",
    "ui-btn-md": size === "md",
    "ui-btn-lg": size === "lg",
  });
}

/** Create the styling for a custom component that has button-like appearance */
export function getButtonClasses({
  variant,
  size = "md",
  outlined,
}: ButtonClassParams) {
  return clsx("ui-btn", getButtonVariant(variant), getButtonSize(size), {
    "ui-btn-outline": outlined,
  });
}
