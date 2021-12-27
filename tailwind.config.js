module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [],
  theme: {
    extend: {},
    // colors: { ...materialColors }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    
  },
  purge: {
    content: [
      './src/**/*.{html,ts,css}',
    ]
  }
}
