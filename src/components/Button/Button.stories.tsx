import type { Meta, StoryObj } from "@storybook/react-vite";
import Button, { DEFAULT_LOADING_STYLES } from ".";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  args: {
    size: "md",
    variant: "none",
    outlined: false,
    disabled: false,
    isLoading: false,
    disabledOnLoading: true,
    loadingStyles: DEFAULT_LOADING_STYLES,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    outlined: true,
  },
  render: (args) => <Button {...args}>Click me</Button>,
};
