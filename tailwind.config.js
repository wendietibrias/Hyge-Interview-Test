export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#101014",
        darkSecondaryBg: "#28282C",
        whiteBg: "#fff",
        whiteGraySecondaryBg: "#E9ECF2",
        whiteGrayBg: "#FAFAFA",
        darkText: "#101014",
        darkGrayText: "#3D3D47",
        darkGraySecondaryText: "#3D3D47",
      },
      screens: {
        'max-sm': { max: '375px' },
        'max-md': { max: '1024px' },
        'max-lg': { max: '1280px' },
        'max-xl': { max: '1440px' },
      }
    }
  },
  plugins: [],
}
