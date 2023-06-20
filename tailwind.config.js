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
    fontSize: {
      "logo-size": [
        "1.625rem",
        {
          lineHeight: "2.438rem",
          fontWeight: "700",
        },
      ],
      h4: [
        "0.813rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "400",
          letterSpacing: "0.156em",
        },
      ],
    },
    borderRadius: {
      normal: "0.938rem",
    },
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
        logo: "var(--color-logo)",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        surface: "var(--color-bg-surface)",
      },
      boxShadow: {
        normal: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
      },
    },
  },
  plugins: [],
};
