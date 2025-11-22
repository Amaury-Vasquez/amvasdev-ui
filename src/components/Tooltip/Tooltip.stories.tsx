import type { Meta, StoryObj } from "@storybook/react-vite";
import Tooltip from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "down", "left", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Tooltip",
    position: "top",
  },
  render: (args) => (
    <div className="ui:p-8">
      <span className="ui:relative">
        Example usage
        <Tooltip {...args} />
      </span>
    </div>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div className="ui:flex ui:flex-col ui:gap-40 ui:md:flex-row ui:p-32 ui:items-center ui:justify-center">
      <span className="ui:relative">
        Top
        <Tooltip content="Top tooltip" position="top" />
      </span>
      <span className="ui:relative">
        Down
        <Tooltip content="Down tooltip" position="down" />
      </span>
      <span className="ui:relative">
        Left
        <Tooltip content="Left tooltip" position="left" />
      </span>
      <span className="ui:relative">
        Right
        <Tooltip content="Right tooltip" position="right" />
      </span>
    </div>
  ),
};
