module.exports = {
  content: ["*.{html,js}"],
  // darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    screens: {
      xs: "420px",
      sm: "580px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gray-100': '#F3F6F6',
      'slate-500': '#566A7F',
      'blue-400': '#6CA9E6',
      'blue-500': '#418FDE',
      'indigo-50': '#ECF4FC',
    }
  },
  plugins: [],
};
