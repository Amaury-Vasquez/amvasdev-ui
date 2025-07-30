import type { Meta, StoryObj } from "@storybook/react-vite";
import { Clipboard, Menu, X } from "lucide-react";
import IconButton from ".";

const meta: Meta = {
  title: "Components/Icon Button",
  component: IconButton,
  args: {
    tooltip: "Hover me",
  },
};

const ICONS = [Clipboard, Menu, X];
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => (
    <div className="ui-flex ui-mx-auto ui-mt-10 ui-gap-20 ui-p-4 ui-flex-wrap ui-shadow-xl ui-w-fit ui-rounded-lg ui-border ui-border-solid ui-border-base-content ui-border-opacity-10">
      {ICONS.map((Icon, idx) => (
        <IconButton key={"icon" + idx} {...args} icon={<Icon size={20} />} />
      ))}
    </div>
  ),
};
