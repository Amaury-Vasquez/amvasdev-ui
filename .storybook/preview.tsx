import type { Preview, ReactRenderer } from "@storybook/react-vite";
import "../src/index.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { THEMES } from "../src/constants/themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: THEMES.reduce(
        (acc, theme) => Object.assign(acc, { [theme]: theme }),
        {}
      ),
      defaultTheme: "emerald",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
