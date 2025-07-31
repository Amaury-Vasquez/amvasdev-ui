import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, useState } from "react";
import { LucideIcon } from "lucide-react";
import IconButton from "../IconButton";
import Menu from "../Dropdown/Menu";

export type HamburgerMenuPosition = "right" | "left";

export interface HamburgerMenuProps extends Omit<HTMLProps<HTMLDivElement>, "className"> {
  className?: ClassValue;
  icon: LucideIcon;
  children: ReactNode;
  position?: HamburgerMenuPosition;
  closeTimeout?: number;
  closeOnEsc?: boolean;
  menuClassName?: string;
  iconButtonClassName?: ClassValue;
  iconSize?: number;
}

/**
 * HamburgerMenu component
 * @param {icon} icon - The Lucide icon to display in the hamburger menu button.
 * @param {children} children - The content to display in the dropdown menu.
 * @param {position} position - The position of the dropdown menu. Default: `left`
 * @param {closeTimeout} closeTimeout - The time it takes for the dropdown to close. Default: `180`
 * @param {closeOnEsc} closeOnEsc - Whether the dropdown should close when pressing the escape key. Default: `true`
 * @param {menuClassName} menuClassName - The className to apply to the dropdown menu.
 * @param {iconButtonClassName} iconButtonClassName - The className to apply to the icon button.
 * @param {iconSize} iconSize - The size of the icon. Default: `20`
 */
const HamburgerMenu = ({
  className,
  icon: Icon,
  children,
  position = "left",
  closeTimeout = 180,
  closeOnEsc = true,
  menuClassName,
  iconButtonClassName,
  iconSize = 20,
  ...props
}: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleIconButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx("ui:relative ui:w-fit", className)} {...props}>
      <IconButton
        className={iconButtonClassName}
        icon={<Icon size={iconSize} />}
        onClick={handleIconButtonClick}
      />
      {isOpen ? (
        <Menu
          closeMenu={() => setIsOpen(false)}
          closeTimeout={closeTimeout}
          closeOnEsc={closeOnEsc}
          position={position}
          className={menuClassName}
        >
          {children}
        </Menu>
      ) : null}
    </div>
  );
};

export default HamburgerMenu;