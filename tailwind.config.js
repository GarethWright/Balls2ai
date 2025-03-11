/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#4B5563', // text-gray-600
            maxWidth: 'none',
            backgroundColor: 'transparent',
            hr: {
              borderColor: '#E5E7EB', // gray-200
              marginTop: '2em',
              marginBottom: '2em'
            },
            h1: {
              color: '#111827',
              fontWeight: '700',
              fontSize: '2.25rem'
            },
            h2: {
              color: '#111827',
              fontWeight: '700',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem'
            },
            h3: {
              color: '#111827', // text-gray-900
              fontWeight: '600',
              fontSize: '1.5rem'
            },
            a: {
              color: '#4F46E5', // indigo-600
              '&:hover': {
                color: '#4338CA' // indigo-700
              },
              textDecoration: 'none'
            },
            pre: {
              backgroundColor: '#F3F4F6', // gray-100
              color: '#1F2937' // gray-800
            },
            code: {
              backgroundColor: '#F3F4F6', // gray-100
              color: '#1F2937', // gray-800
              fontWeight: '400'
            },
            blockquote: {
              borderLeftColor: '#E5E7EB', // gray-200
              color: '#4B5563' // gray-600
            },
            strong: {
              color: '#111827',
              fontWeight: '600'
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
