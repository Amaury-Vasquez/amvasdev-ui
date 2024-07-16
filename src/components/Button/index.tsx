import { HTMLProps } from "react";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "size" | "type"> {
  type?: ButtonType;
  size?: ButtonSize;
}

const Button = ({ children, size = "md", ...props }: ButtonProps) => (
  <button className="ui-btn" {...props}>
    {children}
  </button>
);

export default Button;
