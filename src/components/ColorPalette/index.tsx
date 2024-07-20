import clsx, { ClassValue } from "clsx";
import { HTMLProps } from "react";

export interface ColorPaletteProps
  extends Omit<HTMLProps<HTMLDivElement>, "className"> {
  theme: string;
  className?: ClassValue;
  themeLabel?: string;
  labelClassName?: ClassValue;
  showThemeLabel?: boolean;
}

/**
 * ColorPalette component
 * @param {theme} theme - The theme of the color palette.
 * @param {className} className - The className to apply to the color palette.
 * @param {themeLabel} themeLabel - The label to display for the theme.
 * @param {labelClassName} labelClassName - The className to apply to the theme label.
 * @param {showThemeLabel} showThemeLabel - Whether to show the theme label. Default: `true`
 */
const ColorPalette = ({
  theme,
  className,
  themeLabel,
  labelClassName,
  showThemeLabel = true,
  ...props
}: Readonly<ColorPaletteProps>) => (
  <div
    className={clsx(
      "ui-flex ui-items-center ui-bg-base-200 ui-px-4 ui-py-2 ui-justify-between ui-shadow-md ui-p-2 ui-rounded-lg ui-border ui-border-solid ui-border-base-200 ui-gap-4",
      className
    )}
    data-theme={theme}
    {...props}
  >
    {showThemeLabel ? (
      <span
        className={clsx(
          "ui-text-base ui-capitalize ui-font-medium",
          labelClassName
        )}
      >
        {themeLabel ?? theme}
      </span>
    ) : null}
    <span className="ui-w-6 ui-h-6 ui-rounded-full ui-bg-primary" />
    <span className="ui-w-6 ui-h-6 ui-rounded-full ui-bg-secondary" />
    <span className="ui-w-6 ui-h-6 ui-rounded-full ui-bg-accent" />
  </div>
);

export default ColorPalette;
