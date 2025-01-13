import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useState } from "react";

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
        "ui-relative ui-btn-ghost ui-rounded-full ui-w-fit ui-p-2 ui-transition-colors ui-flex ui-items-center ui-justify-center",
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
        <span className="ui-absolute ui-left-1/2 ui-right-1/2 -ui-translate-x-1/2 ui-bottom-[calc(100%+0.5rem)] ui-w-fit">
          <span
            className={clsx(
              "ui-bg-base-200 ui-rounded-lg ui-truncate ui-py-2 ui-px-3 ui-w-fit ui-shadow-sm ui-h-fit",
              "ui-items-center ui-justify-center ui-flex ui-relative"
            )}
          >
            {typeof tooltip === "string" ? (
              <span className="ui-text-sm ui-flex">{tooltip}</span>
            ) : (
              tooltip
            )}
          </span>
          <span className="ui-absolute ui-z-50 ui-h-2 ui-w-2 ui-flex ui-right-1/2 -ui-bottom-1 ui-left-1/2 -ui-translate-x-1/2">
            <span className="ui-bg-base-200 ui-h-full ui-w-full ui-flex ui-rotate-45" />
          </span>
        </span>
      ) : null}
    </button>
  );
};

export default IconButton;
