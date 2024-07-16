import clsx from "clsx";
import { ButtonSize, ButtonVariant } from "../components";

interface ButtonClassParams {
  size?: ButtonSize;
  variant: ButtonVariant;
  outlined?: boolean;
}

export function getButtonVariant(variant: ButtonVariant) {
  return clsx({
    "ui-btn-primary": variant === "primary",
    "ui-btn-secondary": variant === "secondary",
    "ui-btn-accent": variant === "accent",
    "ui-btn-info": variant === "info",
    "ui-btn-success": variant === "success",
    "ui-btn-warning": variant === "warning",
    "ui-btn-error": variant === "error",
    "ui-btn-ghost": variant === "ghost",
    "ui-btn-link": variant === "link",
    "ui-btn-neutral": variant === "neutral",
  });
}

/** Create the styling for a custom component that has button-like appearance */
export function getButtonClasses({
  variant,
  size,
  outlined,
}: ButtonClassParams) {
  return clsx(
    "ui-btn",
    getButtonVariant(variant),
    {
      "ui-btn-xs": size === "xs",
      "ui-btn-sm": size === "sm",
      "ui-btn-md": size === "md",
      "ui-btn-lg": size === "lg",
    },
    {
      "ui-btn-outlined": outlined,
    }
  );
}
