import clsx, { ClassValue } from "clsx";
import { HTMLProps } from "react";
import { BadgeCheck } from "lucide-react";

const COLORS = [
  "ui:bg-primary",
  "ui:bg-secondary",
  "ui:bg-accent",
  "ui:bg-neutral",
  "ui:bg-success",
];

export interface ColorPaletteProps
  extends Omit<HTMLProps<HTMLDivElement>, "className"> {
  theme: string;
  className?: ClassValue;
  themeLabel?: string;
  labelClassName?: ClassValue;
  showThemeLabel?: boolean;
  isSelected?: boolean;
}

/**
 * ColorPalette component
 * @param {theme} theme - The theme of the color palette.
 * @param {className} className - The className to apply to the color palette.
 * @param {themeLabel} themeLabel - The label to display for the theme.
 * @param {labelClassName} labelClassName - The className to apply to the theme label.
 * @param {showThemeLabel} showThemeLabel - Whether to show the theme label. Default: `true`
 * @param {isSelected} isSelected - Whether the theme is currently used. Default: `false`
 */

const ColorPalette = ({
  theme,
  className,
  themeLabel,
  labelClassName,
  showThemeLabel = true,
  isSelected = false,
  ...props
}: Readonly<ColorPaletteProps>) => (
  <div
    className={clsx(
      "ui:flex ui:items-center ui:bg-base-200 ui:px-4 ui:py-2 ui:justify-between ui:shadow-md ui:p-2 ui:rounded-lg ui:border ui:border-solid ui:border-base-200 ui:gap-2",
      className
    )}
    data-theme={theme}
    {...props}
  >
    {isSelected ? <BadgeCheck size={20} className="ui:text-primary" /> : null}
    {showThemeLabel ? (
      <span className={clsx("ui:text-base ui:capitalize", labelClassName)}>
        {themeLabel ?? theme}
      </span>
    ) : null}
    {COLORS.map((color) => (
      <span
        className={clsx("ui:w-4 ui:h-4 ui:rounded-full", color)}
        key={color}
      />
    ))}
  </div>
);

export default ColorPalette;
