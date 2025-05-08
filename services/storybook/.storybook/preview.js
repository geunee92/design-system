import "@design/themes/themes.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    rootAttributesTooltip: true,
    rootAttributes: [
      {
        root: "body",
        attribute: "class",
        defaultState: {
          name: "light",
          value: "theme-light",
        },
        states: [
          {
            name: "dark",
            value: "theme-dark",
          },
        ],
      },
    ],
  },
};

export default preview;
