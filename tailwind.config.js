/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        purple: {
          dark: "#240D57",
          light: "#501FC1",
          normal: "#8456EC",
        },
        pink: "#E87BF8",
      },
      secondary: {
        purple: {
          1: "#CCB6FF",
          2: "#EDE5FF",
          3: "#F6F2FF",
        },
        alert: {
          red: {
            light: "#FFD7E0",
            dark: "#E61445",
          },
          green: {
            light: "#D3FFE2",
            dark: "#00805E",
          },
        },
      },
      neutral: {
        gray: {
          1: "#4F4F4F",
          2: "#828282",
          3: "#BDBDBD",
          4: "#E0E0E0",
          5: "#F2F2F2",
          6: "#BDBDBD",
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
