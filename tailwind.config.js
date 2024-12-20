/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
        blink: "blink 1s steps(1, start) infinite",
      },
      colors: {
        black: "var(--black)",
        "dark-red": "var(--dark-red)",
        red: "var(--red)",
        white: "var(--white)",
      },
      fontFamily: {
        "headers-headers-navigations":
          "var(--headers-headers-navigations-font-family)",
        paragraph: "var(--paragraph-font-family)",
    },
  },
},
  plugins: [],
};
