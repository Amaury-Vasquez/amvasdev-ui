import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useCallback, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useToggle } from "usehooks-ts";
import { useClosableContainer } from "../../hooks";

export type DropdownPosition = "right" | "left";

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
  triggerElement: ReactNode;
  children: ReactNode;
  position?: DropdownPosition;
  closeTimeout?: number;
  unstyledTrigger?: boolean;
  triggerClassName?: ClassValue;
  closeOnClickOutside?: boolean;
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
 * @param {closeOnClickOutside} closeOnClickOutside - Whether the dropdown should close when clicking outside. Default: `true`
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
  closeOnClickOutside = true,
  closeOnEsc = true,
  showChevron = true,
  position = "left",
}: DropdownProps) => {
  const [isOpen, toggleIsOpen] = useToggle();
  const ref = useRef<HTMLDivElement>(null);
  const closeContainer = useCallback(() => {
    if (isOpen) {
      toggleIsOpen();
    }
  }, [isOpen]);
  const { isClosing, handleClose } = useClosableContainer(ref, closeContainer, {
    closeTimeout,
    closeOnClickOutside,
    closeOnEsc,
  });

  const handleClick = useCallback(() => {
    if (!isClosing) {
      if (isOpen) {
        handleClose();
      } else toggleIsOpen();
    }
  }, [closeTimeout, isOpen, toggleIsOpen]);

  return (
    <div className="ui-relative ui-w-fit" ref={ref}>
      <button
        className={clsx(
          {
            "ui-btn ui-btn-ghost ui-font-normal ui-flex ui-items-center ui-gap-2":
              !unstyledTrigger,
          },
          triggerClassName
        )}
        onClick={handleClick}
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
        <div
          className={clsx(
            "ui-dropdown-content ui-absolute ui-top-full ui-menu ui-bg-base-100 ui-rounded-box ui-z-[1] ui-p-2 ui-shadow",
            {
              "ui-animate-scale-up": isClosing,
              "ui-animate-scale-down": !isClosing,
            },
            {
              "ui-left-0 ui-origin-top-left": position === "left",
              "ui-right-0 ui-origin-top-right": position === "right",
            },
            className
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
