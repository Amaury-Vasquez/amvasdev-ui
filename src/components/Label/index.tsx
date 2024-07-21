import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode } from "react";

export interface LabelProps
  extends Omit<HTMLProps<HTMLLabelElement>, "className"> {
  className?: ClassValue;
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}

/**
 * Label component
 * @param {className} className - The className to apply to the label.
 * @param {htmlFor} htmlFor - The id of the input the label is for.
 * @param {children} children - The children of the label.
 * @param {required} required - Whether the input is required. Default: `false`
 */
const Label = ({
  className,
  htmlFor,
  children,
  required,
  ...props
}: LabelProps) => (
  <label
    htmlFor={htmlFor}
    className={clsx("ui-label ui-text-sm ui-cursor-pointer", className)}
    {...props}
  >
    {children}
    {required ? <span className="ui-text-error ui-ml-1">*</span> : null}
  </label>
);

export default Label;
