import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from ".";

const meta: Meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  args: {
    options: [
      <a href="/#" key="add=e">
        Home
      </a>,
      <a href="/#" key="add">
        Documents
      </a>,
      "Add Document",
    ],
    className: "",
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: (args) => <Breadcrumbs {...args} />,
};
