import clsx, { ClassValue } from "clsx";
import Label from "../Label";
/**
 * RadioOption
 * @id: string
 * @name: string
 * @label: string (optional), if there is no label then the name will be used as the label
 */

export type RadioGroupOrientation = "horizontal" | "vertical";

export const RADIO_GROUP_VARIANTS = [
  "base",
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "info",
  "error",
] as const;
export type RadioGroupVariant = (typeof RADIO_GROUP_VARIANTS)[number];

export const RADIO_GROUP_SIZES = ["xs", "sm", "md", "lg"] as const;
export type RadioGroupSize = (typeof RADIO_GROUP_SIZES)[number];

export interface RadioOption {
  id: string;
  name: string;
  label?: string;
}

export interface RadioGroupProps {
  id: string;
  options: RadioOption[];
  selectedOption?: RadioOption;
  setSelectedOption: (option: RadioOption) => void;
  variant?: RadioGroupVariant;
  size?: RadioGroupSize;
  className?: ClassValue;
  labelClassName?: ClassValue;
  orientation?: RadioGroupOrientation;
}

const getRadioGroupVariant = (variant: RadioGroupVariant) => {
  return clsx({
    "ui-radio-primary": variant === "primary",
    "ui-radio-secondary": variant === "secondary",
    "ui-radio-accent": variant === "accent",
    "ui-radio-success": variant === "success",
    "ui-radio-warning": variant === "warning",
    "ui-radio-info": variant === "info",
    "ui-radio-error": variant === "error",
  });
};

const getRadioGroupSize = (size: RadioGroupSize) => {
  return clsx({
    "ui-radio-xs": size === "xs",
    "ui-radio-sm": size === "sm",
    "ui-radio-md": size === "md",
    "ui-radio-lg": size === "lg",
  });
};

/**
 * RadioGroup: controlled radio group component
 * @param {id} id - The id of the radio group.
 * @param {options} options - The options for the radio group.
 * @param {selectedOption} selectedOption - The selected option of the radio group. Default: `undefined`
 * @param {setSelectedOption} setSelectedOption - The function to set the selected option.
 * @param {className} className - The className to apply to the radio group.
 * @param {orientation} orientation - The orientation of the radio group. Default: `horizontal`
 */
const RadioGroup = ({
  id,
  options,
  size = "md",
  variant = "base",
  className,
  labelClassName,
  orientation = "horizontal",
  selectedOption,
  setSelectedOption,
}: RadioGroupProps) => {
  return (
    <div
      className={clsx(
        "ui-flex ui-gap-4",
        orientation === "vertical" ? "ui-flex-col" : "ui-flex-row",
        className
      )}
    >
      {options.map((option) => (
        <div key={option.id} className="ui-flex ui-items-center ui-gap-2">
          <Label className={labelClassName} htmlFor={option.id}>
            {option.label ?? option.name}
          </Label>
          <input
            id={option.id}
            name={id}
            type="radio"
            className={clsx(
              "ui-radio",
              getRadioGroupVariant(variant),
              getRadioGroupSize(size)
            )}
            checked={selectedOption?.id === option.id}
            onChange={() => setSelectedOption(option)}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
