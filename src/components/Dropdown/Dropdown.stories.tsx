import type { Meta, StoryObj } from "@storybook/react-vite";
import Dropdown from ".";

const meta: Meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    showChevron: true,
    closeOnEsc: true,
    unstyledTrigger: false,
    triggerElement: "Dropdown",
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const getKey = (i: number) => `item${i}`;

export const Default: Story = {
  render: (args) => (
    <div className="ui-w-full ui:flex ui:items-center ui:justify-between ui:navbar ui:border ui:border-b ui:border-base-200 ui:shadow-md ui:rounded-lg">
      <Dropdown {...args} position="left">
        <ul className="ui-m-0 ui:p-0 ui:w-80">
          {Array.from({ length: 5 }, (_, i) => () => (
            <li key={getKey(i)} className="ui-p-2">
              Item {i + 1}
            </li>
          )).map((Item, i) => (
            <Item key={getKey(i)} />
          ))}
        </ul>
      </Dropdown>

      <Dropdown {...args} position="right">
        <ul className="ui-m-0 ui:p-0 ui:w-80">
          {Array.from({ length: 5 }, (_, i) => () => (
            <li key={getKey(i)} className="ui-p-2">
              Item {i + 1}
            </li>
          )).map((Item, i) => (
            <Item key={getKey(i)} />
          ))}
        </ul>
      </Dropdown>
    </div>
  ),
};
