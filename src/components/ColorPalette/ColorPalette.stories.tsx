import type { Meta, StoryObj } from "@storybook/react-vite";
import ColorPalette from ".";
import { THEMES } from "../../constants/themes";

const meta: Meta = {
  title: "Components/Color Palette",
  component: ColorPalette,
  args: {
    isSelected: false,
    theme: "emerald",
    showThemeLabel: true,
  },
  argTypes: {
    theme: {
      options: THEMES,
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
  render: (args) => (
    <div className="ui:p-4 ui:max-w-80">
      <ColorPalette {...args} />
    </div>
  ),
};

export const AllThemes: Story = {
  args: {
    theme: "winter",
  },

  render: () => (
    <div className="ui:w-full ui:flex ui:flex-col ui:gap-4 ui:max-w-80">
      {THEMES.map((theme) => (
        <ColorPalette key={theme} theme={theme} />
      ))}
    </div>
  ),
};
