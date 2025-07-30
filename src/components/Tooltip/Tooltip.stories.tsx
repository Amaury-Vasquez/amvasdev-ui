import type { Meta, StoryObj } from "@storybook/react-vite";
import Tooltip from ".";

const meta: Meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div className="ui-p-8">
      <span className="ui-relative">
        Example usage
        <Tooltip content="Tooltip" />
      </span>
    </div>
  ),
};
