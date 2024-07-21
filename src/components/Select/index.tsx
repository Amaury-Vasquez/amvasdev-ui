import clsx, { ClassValue } from "clsx";
import { useOnClickOutside } from "usehooks-ts";
import ErrorLabel from "../ErrorLabel";
import { useRef, useState } from "react";

export const SELECT_SIZES = ["xs", "sm", "md", "lg"] as const;
export type SelectSize = (typeof SELECT_SIZES)[number];

export interface SelectProps {
  id: string;
  options: string[];
  onChange: (option: string) => void;
  className?: ClassValue;
  containerClassName?: ClassValue;
  labelClassName?: ClassValue;
  optionsClassName?: ClassValue;
  selectedOptionClassName?: ClassValue;
  size?: SelectSize;
  label?: string;
  bordered?: boolean;
  errorMessage?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
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
  bordered = true,
  id,
  errorMessage,
  value,
  placeholder,
  options,
  defaultValue,
  required,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 180);
  };

  const toggleIsFocused = () => {
    if (isOpen) {
      onClose();
    } else if (!isClosing) {
      onOpen();
    }
  };

  const handleClickOutside = () => {
    if (isOpen && !isClosing) {
      onClose();
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
      <div className="ui-relative ui-w-fit" ref={ref}>
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
          onClick={toggleIsFocused}
        >
          {value ?? defaultValue ?? placeholder}
        </button>
        {isOpen ? (
          <div
            className={clsx(
              "ui-absolute ui-flex ui-flex-col ui-origin-top-left ui-w-full ui-rounded-lg ui-shadow-lg ui-left-0 ui-border ui-border-solid ui-border-base-200",
              {
                "ui-top-8": size === "xs",
                "ui-top-9": size === "sm",
                "ui-top-[52px]": size === "md",
                "ui-top-[68px]": size === "lg",
                "ui-animate-scale-down": !isClosing,
                "ui-animate-scale-up": isClosing,
              }
            )}
          >
            {options.map((option, idx) => (
              <button
                key={option}
                onClick={() => {
                  console.log(option);
                  onChange(option);
                  toggleIsFocused();
                }}
                className={clsx(
                  "ui-px-4 ui-text-sm ui-font-semibold ui-p-4 ui-justify-start ui-flex ui-w-full ui-transition-colors",
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
              >
                {option}
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
