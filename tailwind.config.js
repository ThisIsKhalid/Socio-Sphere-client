import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#30b5ac",
          secondary: "#23af44",
          accent: "#1a7b8c",
          neutral: "#322933",
          "base-100": "#ecfeff",
          info: "#294bd6",
          success: "#7aebb1",
          warning: "#a36c05",
          error: "#f17e6a",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
