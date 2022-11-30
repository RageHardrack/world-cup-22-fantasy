module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
    ],
    theme: {
      extend: {
        colors: {
          "color-1": "#CBB264",
          "color-2": "#000000",
          "color-3": "#D8C690",
          "color-4": "#BE9E44",
          "color-5": "#1A1A1A",
          "color-6": "#E5D9B6",
          "text-color-8": "#1A1A1A",
        },
      },
      keyframes: {
        expand: {
          "0%": { transform: "scale(0.8)" },
          "25%": { transform: "scale(1.33)" },
        },
      },
      animation: {
        expand: "expand 1s ease-in-out infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
    plugins: [],
  };
  