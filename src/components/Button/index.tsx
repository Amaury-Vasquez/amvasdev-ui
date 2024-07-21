import clsx, { ClassValue } from "clsx";
import { HTMLProps } from "react";
import { getButtonClasses } from "../../utilities";

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

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "className" | "size" | "type"> {
  className?: ClassValue;
  type?: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  outlined?: boolean;
}

/**
 * Button component
 * @param {className} className - The className to apply to the button.
 * @param {children} children - The content to display in the button.
 * @param {size} size - The size of the button. Default: `md`
 * @param {variant} variant - The variant of the button. Default: `base`
 * @param {outlined} outlined - Whether the button should be outlined (no bg color and bordered). Default: `false`
 */
const Button = ({
  className,
  children,
  size = "md",
  variant = "base",
  outlined = false,
  disabled,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(getButtonClasses({ size, variant, outlined }), className)}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
