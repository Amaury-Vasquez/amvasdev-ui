import { CircleCheck, CircleMinus } from "lucide-react";
import { IComboboxOption } from ".";
import { useState } from "react";

interface ComboboxOptionProps extends IComboboxOption {
  isSelected: boolean;
  onClick: () => void;
}

export const getComboboxOptionId = (id: string) => `${id}_combobox_option`;

/**
 * ComboboxOption component
 * @param {id} id - The id of the option.
 * @param {text} text - The text to display in the option.
 * @param {content} content - The content to display in the option.
 * @param {isSelected} isSelected - Whether the option is selected.
 */
const ComboboxOption = ({
  id,
  text,
  content,
  isSelected,
  onClick,
}: ComboboxOptionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <li>
      <button
        className="ui-p-4 ui-w-full ui-flex ui-items-center ui-justify-between hover:ui-bg-base-200"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id={getComboboxOptionId(id)}
      >
        {content ?? text}
        {isSelected && (!isHovered || isFocused) ? (
          <CircleCheck size="20" className="ui-text-success" />
        ) : null}
        {isSelected && isHovered && !isFocused ? (
          <CircleMinus size="20" className="ui-text-error" />
        ) : null}
      </button>
    </li>
  );
};

export default ComboboxOption;
