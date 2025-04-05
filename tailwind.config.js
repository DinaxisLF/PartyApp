/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        biryani: ["Biryani-Regular", "sans-serif"],
        "biryani-bold": ["Biryani-Bold", "sans-serif"],
        "biryani-extrabold": ["Biryani-ExtraBold", "sans-serif"],
        "biryani-black": ["Biryani-Black", "sans-serif"],
        "biryani-semibold": ["Biryani-SemiBold", "sans-serif"],
        "biryani-light": ["Biryani-Light", "sans-serif"],
        "biryani-extralight": ["Biryani-ExtraLight", "sans-serif"],
        kronaone: ["KronaOne-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
