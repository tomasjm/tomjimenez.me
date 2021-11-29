module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "h1,h2,h3": {
              fontFamily: "Cal Sans",
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.800"),
              backgroundColor: theme("colors.gray.100"),
              fontStyle: "italic",
              fontWeight: "600",
            },
            ul: {
              li: {
                "&:before": {
                  backgroundColor: theme("colors.gray.800"),
                },
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            "h1,h2,h3": {
              color: theme("colors.white"),
            },
            a: {
              color: theme("colors.white"),
            },
            blockquote: {
              color: theme("colors.white"),
              borderLeftColor: theme("colors.white"),
              backgroundColor: theme("colors.gray.900"),
              fontStyle: "italic",
              fontWeight: "600",
            },
            ul: {
              li: {
                "&:before": {
                  backgroundColor: theme("colors.white"),
                },
              },
            },
            strong: {
              color: theme("colors.white"),
            },
            pre: {
              backgroundColor: theme("colors.gray.700"),
            },
            code: {
              color: theme("colors.white"),
            },
          },
        },
      }),
      fontFamily: {
        cal: ["Cal Sans"],
        inter: ["Inter"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
