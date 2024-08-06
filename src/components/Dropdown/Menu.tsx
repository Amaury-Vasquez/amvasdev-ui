import clsx from "clsx";
import { useRef } from "react";
import { useClosableContainer } from "../../hooks";
import { DropdownProps } from ".";

interface MenuProps
  extends Pick<
    DropdownProps,
    "closeTimeout" | "closeOnEsc" | "className" | "position" | "children"
  > {
  closeMenu: () => void;
}

const Menu = ({
  closeTimeout,
  closeOnEsc,
  closeMenu,
  position,
  className,
  children,
}: MenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isClosing } = useClosableContainer(ref, closeMenu, {
    closeTimeout,
    closeOnEsc,
  });

  return (
    <div
      ref={ref}
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
  );
};

export default Menu;
