/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit","sans-serif"]
      },
      colors: {
          white:     "hsl(0, 0%, 100%)",
          slate_300: "hsl(212, 45%, 89%)",
          slate_500: "hsl(216, 15%, 48%)",
          slate_900: "hsl(218, 44%, 22%)"
      },
      fontSize: {
        headline: ["22px", { lineHeight: "120%" }], // Outfit Bold 22px, line-height 120%
        body: ["15px", { lineHeight: "140%" }],    // Outfit Regular 15px, line-height 140%
      },
    },
  },
  plugins: [],
}

