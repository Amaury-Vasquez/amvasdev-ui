import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useCallback, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useOnClickOutside, useToggle } from "usehooks-ts";

export interface DropdownProps extends HTMLProps<HTMLDivElement> {
  triggerElement: ReactNode;
  children: ReactNode;
  position?: "right" | "left";
  closeTimeout?: number;
  unstyledTrigger?: boolean;
  triggerClassName?: ClassValue;
  closeOnClickOutside?: boolean;
  showChevron?: boolean;
}

const Dropdown = ({
  className,
  closeTimeout = 180,
  children,
  unstyledTrigger,
  triggerClassName,
  triggerElement,
  closeOnClickOutside = true,
  showChevron = true,
  position = "left",
}: DropdownProps) => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      toggleIsOpen();
      setIsClosing(false);
    }, closeTimeout);
  }, [closeTimeout, toggleIsOpen]);

  const handleClick = useCallback(() => {
    if (isOpen) {
      handleClose();
    } else toggleIsOpen();
  }, [closeTimeout, isOpen, toggleIsOpen]);

  useOnClickOutside(ref, () => {
    if (isOpen && closeOnClickOutside) {
      handleClose();
    }
  });

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
