import clsx, { ClassValue } from "clsx";
import { HTMLProps } from "react";
import { Check } from "lucide-react";

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
    className={clsx("ui:flex ui:gap-2 ui:items-center", className)}
    {...props}
  >
    <div
      data-theme={theme}
      className="ui:bg-base-100 ui:grid ui:grid-cols-2 ui:gap-0.5 ui:rounded-md ui:p-1 ui:shadow-sm"
    >
      <span className="ui:bg-base-content ui:size-1 ui:rounded-full" />
      <span className="ui:bg-primary ui:size-1 ui:rounded-full" />
      <span className="ui:bg-secondary ui:size-1 ui:rounded-full" />
      <span className="ui:bg-accent ui:size-1 ui:rounded-full" />
    </div>
    {showThemeLabel ? (
      <div className={clsx("ui:w-32 ui:truncate", labelClassName)}>
        {themeLabel ?? theme}
      </div>
    ) : null}
    {isSelected ? <Check className="ui:h-3 ui:w-3 ui:shrink-0" /> : null}
  </div>
);

export default ColorPalette;
