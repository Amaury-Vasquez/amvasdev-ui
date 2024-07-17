import clsx, { ClassValue } from "clsx";
import { forwardRef, HTMLProps } from "react";
import { getInputClasses } from "../../utilities/input";

export type InputVariant =
  | "base"
  | "ghost"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "info"
  | "warning"
  | "error";

export type InputSize = "xs" | "sm" | "md" | "lg";

export interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, "size" | "className"> {
  bordered?: boolean;
  className?: ClassValue;
  labelClassName?: ClassValue;
  size?: InputSize;
  variant?: InputVariant;
  label?: string;
  required?: boolean;
  id: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      variant = "base",
      size = "md",
      label,
      bordered = true,
      required,
      labelClassName,
      type,
      ...props
    },
    ref
  ) => (
    <div className="ui-flex ui-flex-col ui-w-full">
      {label ? (
        <label
          htmlFor={id}
          className={clsx(
            "ui-label ui-pl-1 ui-flex ui-justify-start ui-gap-1",
            labelClassName
          )}
        >
          {label}
          {required ? <span className="ui-text-error">*</span> : null}
        </label>
      ) : null}
      <input
        id={id}
        data-testid={id}
        ref={ref}
        required={required}
        type={type}
        className={clsx(
          getInputClasses({ variant, size, bordered }),
          className
        )}
        {...props}
      />
    </div>
  )
);

Input.displayName = "Input";
export default Input;
