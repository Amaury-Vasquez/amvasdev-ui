import clsx, { ClassValue } from "clsx";
import { forwardRef, HTMLProps, ReactNode } from "react";
import ErrorLabel from "../ErrorLabel";
import Label from "../Label";
import { getInputClasses } from "../../utilities/input";

export const INPUT_VARIANTS = [
  "base",
  "ghost",
  "primary",
  "secondary",
  "accent",
  "success",
  "info",
  "warning",
  "error",
] as const;
export type InputVariant = (typeof INPUT_VARIANTS)[number];

export const INPUT_SIZES = ["xs", "sm", "md", "lg"] as const;
export type InputSize = (typeof INPUT_SIZES)[number];

export interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, "size" | "className"> {
  bordered?: boolean;
  className?: ClassValue;
  labelClassName?: ClassValue;
  size?: InputSize;
  variant?: InputVariant;
  label?: string;
  errorMessage?: string;
  required?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  id: string;
}

/**
 * Input component
 * @param {className} className - The className to apply to the input.
 * @param {label} label - The label to display for the input.
 * @param {required} required - Whether the input is required. Default: `false`
 * @param {id} id - The id of the input.
 * @param {variant} variant - The variant of the input. Default: `base`
 * @param {size} size - The size of the input. Default: `md`
 * @param {bordered} bordered - Whether the input should have a border. Default: `true`
 */
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
      errorMessage,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => (
    <div className="ui-flex ui-flex-col ui-w-full">
      {label ? (
        <Label
          htmlFor={id}
          required={required}
          className={clsx("ui-pl-1 ui-justify-start", labelClassName)}
        >
          {label}
        </Label>
      ) : null}
      <div className="ui-relative ui-w-full">
        {leftIcon ? (
          <span className="ui-absolute ui-h-full ui-flex ui-items-center ui-px-2 ui-top-0">
            {leftIcon}
          </span>
        ) : null}
        <input
          id={id}
          data-testid={id}
          ref={ref}
          required={required}
          type={type}
          className={clsx(
            "ui-w-full",
            getInputClasses({ variant, size, bordered }),
            {
              "ui-pl-8": leftIcon,
              "ui-pr-8": rightIcon,
            },
            className
          )}
          {...props}
        />
        {rightIcon ? (
          <span className="ui-absolute ui-right-0 ui-h-full ui-flex ui-items-center ui-px-2 ui-top-0">
            {rightIcon}
          </span>
        ) : null}
      </div>
      {errorMessage ? (
        <ErrorLabel text={errorMessage} className="ui-pt-1 ui-pl-1" />
      ) : null}
    </div>
  )
);

Input.displayName = "Input";
export default Input;
export { default as PasswordInput } from "./PasswordInput";
