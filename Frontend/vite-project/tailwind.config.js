module.exports = {
  content: ["./Tailwind/**/*.{html,js}","./Javascript/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'tweetsky': '#1d9bf0',
        'tweetbg': '#eff3f4',
        'tweethover': '#e6e9e9',
      },
  
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
