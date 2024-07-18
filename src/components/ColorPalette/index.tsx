import clsx, { ClassValue } from "clsx";

export interface ColorPaletteProps {
  theme: string;
  className?: ClassValue;
  themeLabel?: string;
  labelClassName?: ClassValue;
  showThemeLabel?: boolean;
}

const ColorPalette = ({
  theme,
  className,
  themeLabel,
  labelClassName,
  showThemeLabel = true,
}: Readonly<ColorPaletteProps>) => (
  <div
    className={clsx(
      "ui-flex ui-items-center ui-bg-base-200 ui-px-4 ui-py-2 ui-justify-between ui-shadow-md ui-p-2 ui-rounded-lg ui-border ui-border-solid ui-border-base-200 ui-gap-4",
      className
    )}
    data-theme={theme}
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
