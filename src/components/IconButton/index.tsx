import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useState } from "react";
import Tooltip from "../Tooltip";

export interface IconButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "className" | "size" | "type"> {
  className?: ClassValue;
  icon: ReactNode;
  tooltip?: ReactNode;
}

/**
 * IconButton component
 * @param {className} className - The className to apply to the icon button.
 * @param {icon} icon - The icon to display in the button.
 * @param {tooltip} tooltip - The tooltip to display when the button is hovered.
 */
const IconButton = ({
  className,
  icon,
  tooltip,
  ...props
}: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      className={clsx(
        "ui:relative ui:btn-ghost ui:rounded-full ui:w-fit ui:p-2 ui:transition-colors ui:flex ui:items-center ui:justify-center",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      {icon}
      {(isHovered || isFocused) && tooltip ? (
        <Tooltip content={tooltip} />
      ) : null}
    </button>
  );
};

export default IconButton;
