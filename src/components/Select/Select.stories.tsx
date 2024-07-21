import type { Meta, StoryObj } from "@storybook/react";
import Select, { SelectProps, SELECT_SIZES } from ".";
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
    options: ["Option 1", "Option 2", "Option 3"],
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
  const [value, setValue] = useState<string>();

  return (
    <Select {...args} value={value} onChange={setValue} className="ui-w-80" />
  );
};

export const Default: Story = {
  args: {
    required: true,
  },

  render: (args) => <SelectStory {...args} />,
};
