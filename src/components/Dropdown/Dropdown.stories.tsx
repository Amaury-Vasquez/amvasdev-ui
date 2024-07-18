import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from ".";

const meta: Meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    showChevron: true,
    closeOnClickOutside: true,
    triggerElement: "Dropdown",
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <div className="ui-w-full ui-flex ui-items-center ui-justify-between ui-navbar ui-border ui-border-b ui-border-base-200 ui-shadow-md ui-rounded-lg">
      <Dropdown {...args} position="left">
        <ul className="ui-m-0 ui-p-0 ui-w-80">
          {Array.from({ length: 5 }, (_, i) => () => (
            <li key={i} className="ui-p-2">
              Item {i + 1}
            </li>
          )).map((Item) => (
            <Item />
          ))}
        </ul>
      </Dropdown>

      <Dropdown {...args} position="right">
        <ul className="ui-m-0 ui-p-0 ui-w-80">
          {Array.from({ length: 5 }, (_, i) => () => (
            <li key={i} className="ui-p-2">
              Item {i + 1}
            </li>
          )).map((Item) => (
            <Item />
          ))}
        </ul>
      </Dropdown>
    </div>
  ),
};
