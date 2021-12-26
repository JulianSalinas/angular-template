const materialColors = require('material-ui-colors');

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {},
    // colors: { ...materialColors }
  },
  plugins: [],
  corePlugins: {
    
  },
  purge: {
    content: [
      './src/**/*.{html,ts,css}',
    ]
  }
}
