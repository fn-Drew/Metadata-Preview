module.exports = {
  content: ["./src/**/*.{js,jsx}", "./pulbic/index.html"],
  theme: {
    fontFamily: {
      body: ["Plex-Sans", "ui-sans-serif", "system-ui", "-apple-system"],
      mono: ["Plex-mono", "courier", "system-ui", "-apple-system"],
    },
    extend: {
      colors: {
        "background-white": "#fbfdff",
        "background-grey": "#f8fafb",
        "background-blue": "#edf9fe",
        "accent-blue": "#69cdee"
      }
    },
  },
  plugins: [],
}