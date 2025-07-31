import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "lucide-react";
import Input, { INPUT_VARIANTS, INPUT_SIZES } from ".";
import PasswordInput from "./PasswordInput";

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
    placeholder: "Enter text here",
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
    <div className="ui:max-w-80">
      <Input {...args} />
    </div>
  ),
};

export const WithLeftIcon: Story = {
  render: (args) => (
    <div className="ui:max-w-80">
      <Input {...args} leftIcon={<Search className="ui:w-4" />} />
    </div>
  ),
  args: {
    leftIcon: <Search size={10} />,
  },
};

export const WithRightIcon: Story = {
  render: (args) => (
    <div className="ui:max-w-80">
      <Input {...args} rightIcon={<Search className="ui:w-4" />} />
    </div>
  ),
  args: {
    rightIcon: <Search size={10} />,
  },
};

export const WithBothIcons: Story = {
  render: (args) => (
    <div className="ui:max-w-80">
      <Input
        {...args}
        leftIcon={<Search className="ui:w-4" />}
        rightIcon={<Search className="ui:w-4" />}
      />
    </div>
  ),
  args: {
    leftIcon: <Search size={10} />,
    rightIcon: <Search size={10} />,
  },
};

export const Password: Story = {
  render: (args) => (
    <div className="ui:max-w-80">
      <PasswordInput {...args} />
    </div>
  ),
};
