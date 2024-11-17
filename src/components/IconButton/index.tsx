import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useState } from "react";
import { ButtonType, ButtonVariant } from "../Button";

export interface IconButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "className" | "size" | "type"> {
  className?: ClassValue;
  type?: ButtonType;
  variant?: ButtonVariant;
  icon: ReactNode;
  tooltip?: ReactNode;
}

/**
 * IconButton component
 * @param {className} className - The className to apply to the icon button.
 * @param {icon} icon - The icon to display in the button.
 */
const IconButton = ({
  className,
  icon,
  tooltip,
  ...props
}: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div // NOSONAR
      className="ui-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={clsx(
          "ui-btn-ghost ui-relative ui-btn-circle ui-w-fit ui-h-fit ui-p-2 ui-transition-colors",
          className
        )}
        {...props}
      >
        {icon}
      </button>
      {isHovered && tooltip ? (
        <span className="ui-absolute ui-animate-scale-down ui-origin-bottom ui-truncate ui-py-2 ui-px-3 -ui-left-1/2 -ui-right-1/2 ui-bottom-full ui-items-center ui-justify-center ui-rounded-md ui-w-fit ui-shadow-sm ui-flex ui-bg-base-content">
          {typeof tooltip === "string" ? (
            <span className="ui-text-sm ui-text-primary ui-flex">
              {tooltip}
            </span>
          ) : (
            tooltip
          )}
          <span className="ui-absolute ui-bg-primary ui-w-2 ui-h-2" />
        </span>
      ) : null}
    </div>
  );
};

export default IconButton;
