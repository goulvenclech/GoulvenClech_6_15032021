module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './pages/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['dm-sans','ui-sans-serif', 'verdana', 'system-ui'],
    },
    extend: {
      colors: {
        'primary' : '#901C1C',
        'secondary' : '#D3573C',
        'tertiary': '#DB8876',
        'font' : '#525252',
        'font-2' : '#901C1C'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
