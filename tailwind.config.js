module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    content: [
        './public/*.html'
    ]
}
}
