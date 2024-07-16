import clsx, { ClassValue } from "clsx";
import { HTMLProps } from "react";
import { getButtonClasses } from "../../utilities";

export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant =
  | "none"
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

const Button = ({
  className,
  children,
  size = "md",
  variant = "none",
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
