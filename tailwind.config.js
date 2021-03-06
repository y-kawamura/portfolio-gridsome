module.exports = {
  theme: {
    extend:{
      fontFamily: {
        'logo': ['Roboto Mono', 'monospace'],
      },
      colors: {
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'primary': 'var(--color-primary)',
        'primary-darken': 'var(--color-primary-darken)',
        'secondary': 'var(--color-secondary)',
        'onbackground': 'var(--color-onbackground)',
        'onsurface': 'var(--color-onsurface)',
        'onprimary': 'var(--color-onprimary)',
        'onsecondary': 'var(--color-onsecondary)',
        'uiyellow': '#f1c40f',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    }
  },
  variants: {},
  plugins: [],
}
