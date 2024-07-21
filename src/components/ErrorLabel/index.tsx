import clsx, { ClassValue } from "clsx";

export interface ErrorLabelProps {
  text: string;
  className?: ClassValue;
}

/**
 * ErrorLabel component
 * @param {text} text - The text to display for the error.
 */
const ErrorLabel = ({ text, className }: ErrorLabelProps) => (
  <span
    className={clsx(
      "ui-text-error ui-text-sm ui-font-semibold ui-mt-1",
      className
    )}
  >
    {text}
  </span>
);

export default ErrorLabel;
