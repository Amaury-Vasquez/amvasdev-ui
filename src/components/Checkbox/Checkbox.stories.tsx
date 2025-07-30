import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox, { CHECKBOX_SIZES, CHECKBOX_VARIANTS } from ".";

const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    size: "md",
    variant: "none",
    errorMessage: "",
    label: "Checkbox",
    required: false,
    id: "checkbox",
  },
  argTypes: {
    size: {
      options: CHECKBOX_SIZES,
      control: { type: "select" },
    },
    variant: {
      options: CHECKBOX_VARIANTS,
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
};
