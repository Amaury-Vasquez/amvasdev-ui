import clsx, { ClassValue } from "clsx";
import {
  FocusEvent,
  forwardRef,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";
import Input, { InputSize, InputVariant } from "../Input";
import Label from "../Label";
import ComboboxOption from "./ComboboxOption";
import IconButton from "../IconButton";
import { X } from "lucide-react";

export interface IComboboxOption {
  id: string;
  text: string;
  content?: ReactNode;
}

export interface ComboboxProps {
  id: string;
  options: IComboboxOption[];
  name: string;
  value?: string;
  onChange: (e: string) => void;
  selectedOption?: IComboboxOption | null;
  onSelect: (option?: IComboboxOption | null) => void;
  label?: string;
  required?: boolean;
  size?: InputSize;
  listClassName?: ClassValue;
  errorMessage?: string;
  inputVariant?: InputVariant;
  optionClassName?: ClassValue;
}

const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      id,
      options,
      value,
      onChange,
      selectedOption,
      onSelect,
      label,
      required,
      size = "md",
      listClassName,
      errorMessage,
      inputVariant = "base",
      optionClassName,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);

    const possibleOptions = useMemo(() => {
      if (!value) return options;

      const search = value.toLowerCase();
      return options.filter((option) =>
        option.text.toLowerCase().includes(search)
      );
    }, [options, value]);

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      // Avoids blur being called when clearing search
      if (e.relatedTarget?.id === "clear_search") return;
      // This is a hack to prevent the input from blurring when clicking on an option.
      if (!listRef.current?.contains(e.relatedTarget as Node)) {
        setIsFocused(false);
      }
    };

    const handleSelect = (option: IComboboxOption) => {
      onSelect(option);
      onChange(option.text);
      setIsFocused(false);
    };

    const handleClearSearch = () => {
      onChange("");
      onSelect(null);
      setIsFocused(true);
      const input: HTMLInputElement = document.querySelector(`#${id}`)!;
      input.focus();
    };

    return (
      <div className="ui-flex ui-flex-col ui-w-full">
        {label ? (
          <Label required={required} htmlFor={id}>
            {label}
          </Label>
        ) : null}
        <div className="ui-relative">
          <Input
            id={id}
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            required={required}
            size={size}
            ref={ref}
            autoComplete="off"
            errorMessage={errorMessage}
            variant={inputVariant}
            rightIcon={
              isFocused && !!value ? (
                <IconButton
                  id="clear_search"
                  icon={<X size="16" />}
                  onClick={handleClearSearch}
                />
              ) : null
            }
          />
          {isFocused ? (
            <ul
              className={clsx(
                "ui-w-full ui-flex ui-absolute ui-flex-col ui-top-full ui-z-10",
                "ui-shadow-md ui-bg-base-100 ui-transition-colors ui-rounded-lg ui-border ui-border-solid ui-border-base-200",
                listClassName
              )}
              ref={listRef}
            >
              {possibleOptions.map((option) => (
                <ComboboxOption
                  {...option}
                  isSelected={option.id === selectedOption?.id}
                  key={option.id}
                  onClick={() => handleSelect(option)}
                  className={clsx(optionClassName)}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
);

Combobox.displayName = "Combobox";
export default Combobox;
