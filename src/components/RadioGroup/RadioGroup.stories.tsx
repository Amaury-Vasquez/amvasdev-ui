import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import RadioGroup, {
  RadioGroupProps,
  RadioOption,
  RADIO_GROUP_SIZES,
  RADIO_GROUP_VARIANTS,
} from ".";

const meta: Meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  args: {
    orientation: "horizontal",
    size: "md",
    variant: "base",
    id: "radio-group",
    options: [
      { id: "option-1", name: "Option 1" },
      { id: "option-2", name: "Option 2" },
      { id: "option-3", name: "Option 3" },
    ],
    className: "",
  },
  argTypes: {
    variant: {
      control: "select",
      options: RADIO_GROUP_VARIANTS,
    },
    size: {
      control: "select",
      options: RADIO_GROUP_SIZES,
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const DefaultStory = ({
  options,
  ...props
}: Omit<RadioGroupProps, "setSelectedOption" | "selectedOption">) => {
  const [selectedOption, setSelectedOption] = useState<RadioOption>();

  return (
    <RadioGroup
      {...props}
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
};
export const Default: Story = {
  render: (args) => <DefaultStory {...args} />,
};
