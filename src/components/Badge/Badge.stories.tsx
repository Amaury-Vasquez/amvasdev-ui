import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from ".";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
  args: {
    size: "sm",
    borderType: "none",
    soft: false,
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => <Badge {...args}>Default Badge</Badge>,
};

export const AllVariants: Story = {
  render: () => (
    <div className="ui:flex ui:flex-wrap ui:gap-2">
      <Badge>No Variant</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="ui:flex ui:flex-wrap ui:items-center ui:gap-2">
      <Badge size="xs" variant="primary">
        XS
      </Badge>
      <Badge size="sm" variant="primary">
        SM
      </Badge>
      <Badge size="md" variant="primary">
        MD
      </Badge>
      <Badge size="lg" variant="primary">
        LG
      </Badge>
      <Badge size="xl" variant="primary">
        XL
      </Badge>
    </div>
  ),
};

export const BorderTypes: Story = {
  render: () => (
    <div className="ui:flex ui:flex-wrap ui:gap-2">
      <Badge variant="primary" borderType="none">
        None
      </Badge>
      <Badge variant="primary" borderType="outline">
        Outline
      </Badge>
      <Badge variant="primary" borderType="dash">
        Dash
      </Badge>
    </div>
  ),
};

export const SoftStyle: Story = {
  render: () => (
    <div className="ui:flex ui:flex-wrap ui:gap-2">
      <Badge variant="primary" soft={false}>
        Normal
      </Badge>
      <Badge variant="primary" soft={true}>
        Soft
      </Badge>
      <Badge variant="success" soft={true}>
        Soft Success
      </Badge>
      <Badge variant="warning" soft={true}>
        Soft Warning
      </Badge>
    </div>
  ),
};

export const StatusExample: Story = {
  render: () => (
    <div className="ui:flex ui:flex-wrap ui:gap-2">
      <Badge variant="success">Completed</Badge>
      <Badge variant="warning">In Progress</Badge>
      <Badge variant="info">Planning</Badge>
    </div>
  ),
};
