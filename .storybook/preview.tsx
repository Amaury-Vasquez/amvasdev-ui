import type { Preview, ReactRenderer } from "@storybook/react";
import "../src/index.css";
import { THEME_LIST } from "../src/themes";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

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
      themes: THEME_LIST.reduce(
        (acc, theme) => Object.assign(acc, { [theme]: theme }),
        {}
      ),
      defaultTheme: "dracula",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
