import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  args: {
    required: false,
    label: "Sample Input",
    id: "input",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    required: false,
    variant: "base",
    size: "md",
    bordered: false,
  },

  render: (args) => (
    <div className="ui-max-w-80">
      <Input {...args} />
    </div>
  ),
};
