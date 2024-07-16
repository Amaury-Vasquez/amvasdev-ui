import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode } from "react";
import { ButtonType, ButtonVariant } from "../Button";

export interface IconButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "className" | "size" | "type"> {
  className?: ClassValue;
  type?: ButtonType;
  variant?: ButtonVariant;
  icon: ReactNode;
}

const IconButton = ({ className, icon, ...props }: IconButtonProps) => (
  <button
    className={clsx(
      "ui-btn-ghost ui-btn-circle ui-w-fit ui-h-fit ui-p-2 ui-transition-colors",
      className
    )}
    {...props}
  >
    {icon}
  </button>
);

export default IconButton;
