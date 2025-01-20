import type { Meta, StoryObj } from "@storybook/react";
import Combobox, { ComboboxProps, IComboboxOption } from ".";
import { useState } from "react";

const COMBOBOX_OPTIONS = [
  {
    id: "1",
    text: "Option 1",
  },
  {
    id: "2",
    text: "Option 2",
  },
  {
    id: "3",

    text: "Option 3",
  },
];

const meta: Meta = {
  title: "Components/Combobox",
  component: Combobox,
};

export default meta;

type Story = StoryObj<typeof Combobox>;

const ComboboxStory = (args: ComboboxProps) => {
  const [value, setValue] = useState("");
  const [currentOption, setCurrentOption] = useState<
    IComboboxOption | null | undefined
  >(null);

  return (
    <div className="ui-w-80">
      <Combobox
        {...args}
        value={value}
        onChange={setValue}
        options={COMBOBOX_OPTIONS}
        selectedOption={currentOption}
        onSelect={setCurrentOption}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    label: "Combobox",
    required: true,
    id: "combobox",
    size: "md",
    showCloseOptions: true,
    inputVariant: "base",
  },
  render: (args) => <ComboboxStory {...args} />,
};
