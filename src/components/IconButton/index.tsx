import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useState } from "react";
import Tooltip, { TooltipProps } from "../Tooltip";
import { getIconButtonClasses } from "../../utilities";

export interface IconButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "className" | "size" | "type"> {
  className?: ClassValue;
  icon: ReactNode;
  tooltip?: ReactNode | TooltipProps;
}

/**
 * IconButton component
 * @param {className} className - The className to apply to the icon button.
 * @param {icon} icon - The icon to display in the button.
 * @param {tooltip} tooltip - The tooltip to display when the button is hovered. Can be a ReactNode for simple tooltips or TooltipProps object for advanced configuration.
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

  const isTooltipProps = (
    value: ReactNode | TooltipProps
  ): value is TooltipProps => {
    return typeof value === "object" && value !== null && "content" in value;
  };

  return (
    <button
      className={clsx(getIconButtonClasses(), className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={(e) => {
        props.onClick?.(e);
        onMouseLeave();
      }}
      {...props}
    >
      {icon}
      {(isHovered || isFocused) && tooltip ? (
        isTooltipProps(tooltip) ? (
          <Tooltip {...tooltip} />
        ) : (
          <Tooltip content={tooltip} />
        )
      ) : null}
    </button>
  );
};

export default IconButton;
