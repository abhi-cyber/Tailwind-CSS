module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    container: { // By default will set all the containers in the center
      center: true,
      padding: '2rem',
    }
  },
  plugins: [],
  // The pruge command removes unused/ unwanted css from the public/style.css
  purge: {
    enabled: true,
    content: [
        './public/*.html'
    ]
}
}
