import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primaryBlue: "#0098DB",
        lightGray: "#C2EDFF",
        primary: "#0098DB",
        primary2: "#002332",
        primaryOrange: "#f16237",
        secondaryYellow: "#fdba2f",
        grayCustom1: "#afafaf",
        grayCustom2: "#9c9c9c",
        grayNeutral: "#002332",
        dangerRedText: "#BC0202",
        dangerRedInput: "#D5002060",
        successGreen: "#30a448",
      },

      fontSize: {
        fontDeskUltra: "2rem",
        fontDeskLargest: "1.25rem",
        fontDeskLarge: "1rem",
        fontDesk: "0.875rem",
        fontDeskSmall: "0.75rem",
        fontDeskSmallest: "0.5rem",
      },

      spacing: {
        sectionGap: "3rem",
        gapUltra: "2rem",
        gapLargest: "1.5rem",
        gapLarge: "1.25rem",
        gap: "1rem",
        gapMed: "0.75rem",
        gapSmall: "0.5rem",
        gapSmallest: "0.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
