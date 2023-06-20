/** @type {import('tailwindcss').Config} */

const color = color => {
  return ({ opacityValue }) => {
    return opacityValue !== undefined
      ? `rgba(var(${color}), ${opacityValue})`
      : `rgba(var(${color}))`
  }
}

module.exports = {
  darkMode: 'class',
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
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
      }
    },
  },
  plugins: [],
};
