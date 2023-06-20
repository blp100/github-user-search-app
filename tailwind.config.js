/** @type {import('tailwindcss').Config} */

const color = (color) => {
  return ({ opacityValue }) => {
    return opacityValue !== undefined
      ? `rgba(var(${color}), ${opacityValue})`
      : `rgba(var(${color}))`;
  };
};

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-space-mono)"],
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        contrast: "var(--color-text-contrast)",
        link: "var(--color-link)",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        surface: "var(--color-bg-surface)",
      },
    },
  },
  plugins: [],
};
