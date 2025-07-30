import clsx, { ClassValue } from "clsx";
import { HTMLProps } from "react";
import {
  getButtonClasses,
  LoadingClassesArgs,
  getLoadingClasses,
} from "../../utilities";

export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant =
  | "base"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "link";

export interface CustomLoading extends LoadingClassesArgs {
  className?: ClassValue;
}

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "className" | "size" | "type"> {
  className?: ClassValue;
  type?: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  outlined?: boolean;
  isLoading?: boolean;
  loadingStyles?: CustomLoading;
  disabledOnLoading?: boolean;
}

export const DEFAULT_LOADING_STYLES: LoadingClassesArgs = {
  type: "spin",
  size: "xs",
};

/**
 * Button component
 * @param {className} className - The className to apply to the button.
 * @param {children} children - The content to display in the button.
 * @param {size} size - The size of the button. Default: `md`
 * @param {variant} variant - The variant of the button. Default: `base`
 * @param {outlined} outlined - Whether the button should be outlined (no bg color and bordered). Default: `false`
 * @param {isLoading} isLoading - Whether the button should be in a loading state. Default: `false`
 * @param {loadingStyles} loadingStyles - The styles to apply to the loading spinner. Default: `{type: "spin", size: "xs", className: undefined}`
 * @param {disabledOnLoading} disabledOnLoading - Whether the button should be disabled when in a loading state. Default: `true`
 * @param {disabled} disabled - Whether the button should be disabled. Default: `false`
 */
const Button = ({
  className,
  children,
  size = "md",
  variant = "base",
  outlined = false,
  isLoading = false,
  loadingStyles = {},
  disabledOnLoading = true,
  disabled,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(getButtonClasses({ size, variant, outlined }), className)}
    disabled={disabled || (disabledOnLoading && isLoading)}
    {...props}
  >
    {children}
    {isLoading ? (
      <span
        className={clsx(
          "ui:loading",
          getLoadingClasses({
            type: loadingStyles.type ?? DEFAULT_LOADING_STYLES.type,
            size: loadingStyles.size ?? DEFAULT_LOADING_STYLES.size,
          }),
          loadingStyles.className
        )}
      />
    ) : null}
  </button>
);

export default Button;
