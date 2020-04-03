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
      width: {
        '10/100': '10%',
        '20/100': '20%',
        '30/100': '30%',
        '40/100': '40%',
        '50/100': '50%',
        '60/100': '60%',
        '70/100': '70%',
        '80/100': '80%',
        '90/100': '90%',
        '100/100': '100%',
      }
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
