import clsx, { ClassValue } from "clsx";
import {
  FocusEvent,
  FormEvent,
  forwardRef,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";
import { useOnClickOutside } from "../../hooks";
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
  optionLimit?: number;
  closeOptionsText?: string;
  showCloseOptions?: boolean;
  placeholder?: string;
}

/**
 * Combobox component
 * @param {id} id - The id of the combobox.
 * @param {options} options - The options to display in the combobox.
 * @param {value} value - The value of the combobox.
 * @param {onChange} onChange - The function to call when the combobox value changes.
 * @param {selectedOption} selectedOption - The selected option.
 * @param {onSelect} onSelect - The function to call when an option is selected.
 * @param {label} label - The label of the combobox.
 * @param {required} required - Whether the combobox is required.
 * @param {size} size - The size of the combobox.
 * @param {listClassName} listClassName - The class name to apply to the list.
 * @param {errorMessage} errorMessage - The error message to display.
 * @param {inputVariant} inputVariant - The variant of the input.
 * @param {optionClassName} optionClassName - The class name to apply to the options.
 * @param {optionLimit} optionLimit - The limit of options to display.
 * @param {closeOptionsText} closeOptionsText - The text to display for closing options.
 * @param {showCloseOptions} showCloseOptions - Whether to show the close options button.
 * @param {placeholder} placeholder - The placeholder of the combobox.
 */

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
      optionLimit,
      closeOptionsText = "Close options",
      showCloseOptions = true,
      placeholder,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const comboboxRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(comboboxRef, () => setIsFocused(false));

    const possibleOptions = useMemo(() => {
      if (!value) return options;

      const search = value.toLowerCase();
      const possibleOptions = options.filter((option) =>
        option.text.toLowerCase().includes(search)
      );
      return optionLimit
        ? possibleOptions.slice(0, optionLimit)
        : possibleOptions;
    }, [options, value, optionLimit]);

    const focusInput = () => {
      const input: HTMLInputElement = document.querySelector(`#${id}`)!;
      input.focus();
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      // Avoids blur being called when clearing search
      if (e.relatedTarget?.id === "clear_search") return e.preventDefault();
    };

    const handleOptionClick = (option: IComboboxOption) => {
      if (selectedOption?.id === option.id) {
        onSelect(null);
        onChange("");
        focusInput();
      } else {
        onSelect(option);
        onChange(option.text);
        setIsFocused(false);
      }
    };

    const handleClearSearch = () => {
      onChange("");
      onSelect(null);
      setIsFocused(true);
      focusInput();
    };

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      const selectedOption =
        options.find(
          (option) => option.text.toLowerCase() === value.toLowerCase()
        ) ?? null;
      onSelect(selectedOption);
      onChange(value);
    };

    return (
      <div className="ui:flex ui:flex-col ui:w-full" ref={comboboxRef}>
        {label ? (
          <Label required={required} htmlFor={id}>
            {label}
          </Label>
        ) : null}
        <div className="ui:relative">
          <Input
            id={id}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            required={required}
            size={size}
            ref={ref}
            autoComplete="off"
            errorMessage={isFocused ? undefined : errorMessage}
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
            placeholder={placeholder}
          />
          {isFocused && possibleOptions.length > 0 ? (
            <ul
              className={clsx(
                "ui:w-full ui:flex ui:absolute ui:flex-col ui:top-full ui:z-10",
                "ui:shadow-md ui:bg-base-100 ui:transition-colors ui:rounded-lg ui:border ui:border-solid ui:border-base-200",
                listClassName
              )}
            >
              {possibleOptions.map((option) => (
                <ComboboxOption
                  {...option}
                  isSelected={option.id === selectedOption?.id}
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className={clsx(optionClassName)}
                />
              ))}
              {showCloseOptions ? (
                <li>
                  <button
                    onClick={() => setIsFocused(false)}
                    className="ui-p-4 ui:w-full ui:flex ui:items-center ui:justify-center ui:text-sm ui:text-accent ui:font-bold ui:hover:bg-base-200"
                  >
                    {closeOptionsText}
                  </button>
                </li>
              ) : null}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
);

Combobox.displayName = "Combobox";
export default Combobox;
