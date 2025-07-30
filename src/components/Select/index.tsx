import clsx, { ClassValue } from "clsx";
import { useRef } from "react";
import { useOnClickOutside, useToggle } from "../../hooks";
import ErrorLabel from "../ErrorLabel";

export const SELECT_SIZES = ["xs", "sm", "md", "lg"] as const;
export type SelectSize = (typeof SELECT_SIZES)[number];

export interface SelectOption {
  id: string;
  text: string;
}

export interface SelectProps {
  id: string;
  options: SelectOption[];
  onChange: (option: SelectOption) => void;
  className?: ClassValue;
  containerClassName?: ClassValue;
  labelClassName?: ClassValue;
  optionsClassName?: ClassValue;
  selectClassName?: ClassValue;
  selectedOptionClassName?: ClassValue;
  size?: SelectSize;
  label?: string;
  bordered?: boolean;
  errorMessage?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: SelectOption;
  value?: SelectOption;
  menuClassName?: ClassValue;
}

const getSelectSize = (size: SelectSize) => {
  return clsx({
    "ui-select-xs": size === "xs",
    "ui-select-sm": size === "sm",
    "ui-select-md": size === "md",
    "ui-select-lg": size === "lg",
  });
};

const Select = ({
  className,
  containerClassName,
  onChange,
  size = "md",
  label,
  labelClassName,
  optionsClassName,
  selectedOptionClassName,
  selectClassName,
  bordered = true,
  id,
  errorMessage,
  value,
  placeholder,
  options,
  defaultValue,
  required,
  menuClassName,
}: SelectProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (isOpen) {
      toggleIsOpen();
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={clsx("ui-flex ui-flex-col ui-w-full", containerClassName)}>
      {label ? (
        <label
          className={clsx(
            "ui-label ui-text-sm ui-cursor-pointer ui-pl-1 ui-justify-start",
            labelClassName
          )}
        >
          {label}
          {required ? <span className="ui-text-error ui-ml-1">*</span> : null}
        </label>
      ) : null}
      <div className={clsx("ui-relative ui-w-fit", selectClassName)} ref={ref}>
        <button
          className={clsx(
            "ui-select ui-items-center",
            getSelectSize(size),
            {
              "ui-select-bordered": bordered,
            },
            className
          )}
          id={id}
          onClick={toggleIsOpen}
          type="button"
        >
          {value?.text ?? defaultValue?.text ?? placeholder}
        </button>
        {isOpen ? (
          <div
            className={clsx(
              "ui-absolute ui-flex ui-flex-col ui-w-full ui-rounded-lg ui-shadow-lg ui-left-0 ui-border ui-border-solid ui-border-base-200",
              {
                "ui-top-8": size === "xs",
                "ui-top-9": size === "sm",
                "ui-top-[52px]": size === "md",
                "ui-top-[68px]": size === "lg",
              },
              menuClassName
            )}
          >
            {options.map((option, idx) => (
              <button
                key={option.id}
                onClick={() => {
                  onChange(option);
                  toggleIsOpen();
                }}
                className={clsx(
                  "ui-px-4 ui-bg-base-100 ui-text-sm ui-font-semibold ui-p-4 ui-justify-start ui-flex ui-w-full ui-transition-colors",
                  {
                    "ui-rounded-t-lg": idx === 0,
                    "ui-rounded-b-lg": idx === options.length - 1,
                  },
                  {
                    "hover:ui-bg-base-200": option !== value,
                  },
                  optionsClassName,
                  option === value &&
                    clsx("ui-bg-base-200", selectedOptionClassName)
                )}
                type="button"
              >
                {option.text}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {errorMessage ? (
        <ErrorLabel text={errorMessage} className="ui-pt-1 ui-pl-1" />
      ) : null}
    </div>
  );
};

Select.displayName = "Select";
export default Select;
