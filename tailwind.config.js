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
      'indigo-50': '#ECF4FC',
      'gray-700': '#2D3748',
      'gray-100': '#F3F6F6',
      'slate-950': '#0A0F1A',
      'slate-500': '#566A7F',
      'slate-200': '#E2E8F0',
      'blue-400': '#6CA9E6',
      'blue-500': '#418FDE',
      'green-500': '#1DBF5E',
      'amber-300': '#FFC04D',
    }
  },
  plugins: [],
};
