import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useState } from "react";
import Tooltip from "../Tooltip";
import { getIconButtonClasses } from "../../utilities";

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

  const onMouseLeave = () => {
    setIsHovered(false);
    setIsFocused(false);
  };

  return (
    <button
      className={clsx(getIconButtonClasses(), className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
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
