import clsx, { ClassValue } from "clsx";
import { HTMLProps, ReactNode, forwardRef } from "react";
import ErrorLabel from "../ErrorLabel";
import Label from "../Label";

export const CHECKBOX_SIZES = ["xs", "sm", "md", "lg"] as const;
export type CheckboxSize = (typeof CHECKBOX_SIZES)[number];

export const CHECKBOX_VARIANTS = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "info",
  "error",
  "base",
] as const;
export type CheckboxVariant = (typeof CHECKBOX_VARIANTS)[number];

export interface CheckboxProps
  extends Omit<
    HTMLProps<HTMLInputElement>,
    "className" | "size" | "type" | "label"
  > {
  className?: ClassValue;
  containerClassName?: ClassValue;
  label?: ReactNode;
  labelClassName?: ClassValue;
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  errorMessage?: string;
  id: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      containerClassName,
      label,
      labelClassName,
      id,
      size = "md",
      variant = "base",
      errorMessage,
      required,
      ...props
    },
    ref
  ) => (
    <div className="ui-flex ui-flex-col ui-w-fit">
      <div
        className={clsx("ui-flex ui-items-center ui-gap-1", containerClassName)}
      >
        {label ? (
          <Label className={labelClassName} htmlFor={id} required={required}>
            {label}
          </Label>
        ) : null}
        <input
          className={clsx(
            "ui-checkbox",
            {
              "ui-checkbox-xs": size === "xs",
              "ui-checkbox-sm": size === "sm",
              "ui-checkbox-md": size === "md",
              "ui-checkbox-lg": size === "lg",
            },
            {
              "ui-checkbox-primary": variant === "primary",
              "ui-checkbox-secondary": variant === "secondary",
              "ui-checkbox-accent": variant === "accent",
              "ui-checkbox-success": variant === "success",
              "ui-checkbox-warning": variant === "warning",
              "ui-checkbox-info": variant === "info",
              "ui-checkbox-error": variant === "error",
            },
            className
          )}
          ref={ref}
          required={required}
          type="checkbox"
          id={id}
          {...props}
        />
      </div>
      {errorMessage ? (
        <ErrorLabel className="ui-text-left ui-pl-1" text={errorMessage} />
      ) : null}
    </div>
  )
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
