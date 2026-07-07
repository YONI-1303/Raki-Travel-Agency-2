/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#eef2fb',
          100: '#d6def5',
          200: '#aebdf0',
          300: '#7e96e6',
          400: '#516fda',
          500: '#3450c8',
          600: '#283ea8',
          700: '#1f3286',
          800: '#15205f',
          900: '#0c153d',
          950: '#070d24',
        },
        gold: {
          50: '#fbf7ec',
          100: '#f6eccf',
          200: '#ecd79b',
          300: '#e2bf5f',
          400: '#d9a73c',
          500: '#c8902a',
          600: '#a96f20',
          700: '#87521d',
          800: '#6f421d',
          900: '#5d381c',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 60px -15px rgba(12, 21, 61, 0.25)',
        'gold': '0 10px 40px -10px rgba(217, 167, 60, 0.45)',
        'card': '0 10px 40px -12px rgba(12, 21, 61, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        'plane-fly': {
          '0%': { transform: 'translateX(-10%) translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateX(50%) translateY(-8px) rotate(1deg)' },
          '100%': { transform: 'translateX(110%) translateY(0) rotate(-2deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'plane-fly': 'plane-fly 18s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
