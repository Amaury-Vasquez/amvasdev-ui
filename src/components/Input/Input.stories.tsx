import type { Meta, StoryObj } from "@storybook/react";
import Input, { INPUT_VARIANTS, INPUT_SIZES } from ".";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  args: {
    variant: "base",
    size: "md",
    bordered: true,
    required: true,
    id: "input",
    label: "Sample Input",
  },
  argTypes: {
    size: { options: INPUT_SIZES, control: "select" },
    variant: { options: INPUT_VARIANTS, control: "select" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    required: false,
    variant: "base",
    errorMessage: "",
  },

  render: (args) => (
    <div className="ui-max-w-80">
      <Input {...args} />
    </div>
  ),
};
