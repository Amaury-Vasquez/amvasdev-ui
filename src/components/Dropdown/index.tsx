import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Menu from "./Menu";

export type DropdownPosition = "right" | "left";

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
  triggerElement: ReactNode;
  children: ReactNode;
  position?: DropdownPosition;
  closeTimeout?: number;
  unstyledTrigger?: boolean;
  triggerClassName?: ClassValue;
  closeOnEsc?: boolean;
  showChevron?: boolean;
}

/**
 * Dropdown component
 * @param {triggerElement} triggerElement - The element that will trigger the dropdown.
 * @param {children} children - The content to display in the dropdown.
 * @param {position} position - The position of the dropdown. Default: `left`
 * @param {closeTimeout} closeTimeout - The time it takes for the dropdown to close. Default: `180`
 * @param {unstyledTrigger} unstyledTrigger - Whether the trigger should be styled or not. Default: `false`
 * @param {triggerClassName} triggerClassName - The className to apply to the trigger.
 * @param {closeOnEsc} closeOnEsc - Whether the dropdown should close when pressing the escape key. Default: `true`
 * @param {showChevron} showChevron - Whether to show the chevron icon. Default: `true`
 */
const Dropdown = ({
  className,
  closeTimeout = 180,
  children,
  unstyledTrigger,
  triggerClassName,
  triggerElement,
  closeOnEsc = true,
  showChevron = true,
  position = "left",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="ui-relative ui-w-fit">
      <button
        className={clsx(
          {
            "ui-btn ui-btn-ghost ui-font-normal ui-flex ui-items-center ui-gap-2 ui-outline-none focus-visible:ui-border-2 focus-visible:ui-border-primary focus-visible:ui-border-solid":
              !unstyledTrigger,
          },
          triggerClassName
        )}
        onClick={handleButtonClick}
      >
        {triggerElement}
        {showChevron ? (
          <FaChevronDown
            className={clsx("ui-text-sm ui-transition-transform", {
              "ui-rotate-180": isOpen,
              "ui-rotate-0": !isOpen,
            })}
          />
        ) : null}
      </button>
      {isOpen ? (
        <Menu
          closeMenu={() => setIsOpen(false)}
          closeTimeout={closeTimeout}
          closeOnEsc={closeOnEsc}
          position={position}
          className={className}
        >
          {children}
        </Menu>
      ) : null}
    </div>
  );
};

export default Dropdown;
