import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode } from "react";

export interface BreadcrumbsProps
  extends Omit<HTMLProps<HTMLDivElement>, "className"> {
  className?: ClassValue;
  options: ReactNode[];
}

/**
 * Breadcrumbs component
 * @param {className} className - The className to apply to the breadcrumbs.
 * @param {options} options - The options to display as breadcrumbs.
 * If the option is a link, it will be rendered as a link, otherwise it will be rendered as text
 */
const Breadcrumbs = ({
  className,
  id,
  options,
  ...props
}: BreadcrumbsProps) => (
  <div
    className={clsx("ui-breadcrumbs ui-text-sm", className)}
    id={id}
    {...props}
  >
    <ul>
      {options.map((option, idx) => (
        <li key={`${id}-${idx}`}>{option}</li>
      ))}
    </ul>
  </div>
);

export default Breadcrumbs;
