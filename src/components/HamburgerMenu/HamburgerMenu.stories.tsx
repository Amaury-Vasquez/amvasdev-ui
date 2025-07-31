import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu, Settings, User, LogOut, HelpCircle } from "lucide-react";
import HamburgerMenu from ".";

const meta: Meta = {
  title: "Components/HamburgerMenu",
  component: HamburgerMenu,
  args: {
    icon: Menu,
    closeOnEsc: true,
    iconSize: 20,
    position: "left",
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

export const Default: Story = {
  render: (args) => (
    <div className="ui:flex ui:items-center ui:justify-center ui:p-8">
      <HamburgerMenu {...args}>
        <ul className="ui:m-0 ui:p-0 ui:w-48">
          <li className="ui:p-2 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md">Profile</li>
          <li className="ui:p-2 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md">Settings</li>
          <li className="ui:p-2 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md">Help</li>
          <li className="ui:p-2 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md">Logout</li>
        </ul>
      </HamburgerMenu>
    </div>
  ),
};

export const RightPosition: Story = {
  args: {
    position: "right",
  },
  render: (args) => (
    <div className="ui:flex ui:items-center ui:justify-center ui:p-8">
      <HamburgerMenu {...args}>
        <ul className="ui:m-0 ui:p-0 ui:w-48">
          <li className="ui:p-2 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md">Profile</li>
          <li className="ui:p-2 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md">Settings</li>
          <li className="ui:p-2 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md">Help</li>
          <li className="ui:p-2 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md ui:text-error">Logout</li>
        </ul>
      </HamburgerMenu>
    </div>
  ),
};

export const CustomIcon: Story = {
  args: {
    icon: Settings,
    iconSize: 24,
  },
  render: (args) => (
    <div className="ui:flex ui:items-center ui:justify-center ui:p-8">
      <HamburgerMenu {...args}>
        <ul className="ui:m-0 ui:p-0 ui:w-56">
          <li className="ui:p-3 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md ui:font-medium">
            General Settings
          </li>
          <li className="ui:p-3 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md ui:font-medium">
            Privacy & Security
          </li>
          <li className="ui:p-3 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md ui:font-medium">
            Notifications
          </li>
          <li className="ui:p-3 ui:hover:bg-base-200 ui:cursor-pointer ui:rounded-md ui:font-medium">
            Account
          </li>
        </ul>
      </HamburgerMenu>
    </div>
  ),
};