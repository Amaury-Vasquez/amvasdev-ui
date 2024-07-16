import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  args: {
    size: "md",
    variant: "none",
    outlined: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Click me</Button>,
};
