/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'noto-jp': ['"Noto Sans JP"', '"Yu Gothic"', 'sans-serif'],
        'mono-jp': ['"Noto Sans Mono CJK JP"', 'monospace'],
      },
      colors: {
        'primary': {
          DEFAULT: '#1F2937',
          light: '#374151',
          dark: '#0F172A',
          foreground: '#fff',
        },
        'accent': {
          red: '#EF4444',
          blue: '#3B82F6',
          amber: '#F59E0B',
        },
        'card': {
          DEFAULT: '#FFF',
          foreground: '#111827',
          border: '#E5E7EB',
        },
        'muted': {
          DEFAULT: '#6B7280',
          bg: '#F3F4F6',
        },
        'background': '#F9FAFB',
        'foreground': '#111827',
        'border': '#E5E7EB',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
        'xl': '0 20px 25px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
