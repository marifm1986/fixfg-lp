export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        surface: 'var(--color-surface)',
        'surface-dark': 'var(--color-surface-dark)',
        muted: 'var(--color-muted)',
        'muted-2': 'var(--color-muted-2)',
        'accent-bg': 'var(--color-accent-bg)',
        border: 'var(--color-border)',
        dark: 'var(--color-dark)'
      }
    }
  }
}