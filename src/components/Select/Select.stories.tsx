import type { Meta, StoryObj } from "@storybook/react-vite";
import Select, { SelectProps, SELECT_SIZES, SelectOption } from ".";
import { useState } from "react";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
  args: {
    required: false,
    size: "md",
    variant: "base",
    bordered: true,
    errorMessage: "",
    label: "Select",
    placeholder: "Select an option",
    options: [
      { id: "1", text: "Option 1" },
      { id: "2", text: "Option 2" },
      { id: "3", text: "Option 3" },
    ],
  },
  argTypes: {
    size: {
      control: "select",
      options: SELECT_SIZES,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const SelectStory = (args: SelectProps) => {
  const [value, setValue] = useState<SelectOption>();

  return (
    <Select {...args} value={value} onChange={setValue} className="ui:w-80" />
  );
};

export const Default: Story = {
  args: {
    required: true,
  },

  render: (args) => <SelectStory {...args} />,
};
