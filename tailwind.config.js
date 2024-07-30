/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      screens: {
        'xs': '400px',
        'md': '890px',
      },
      backgroundImage: {
        'dentist': "url('/app/assets/photo.jpg')",
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
       
          josefin: ['"Josefin Sans"', 'sans-serif'],
          rubik: ['"Rubik"', 'sans-serif'],
    
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
   
        colors: {
          primary: '#4A90E2', // Bleu clair
          secondary: '#6BCB77', // Vert menthe
          accent: '#FFD700', // Jaune pâle
          background: '#FFFFFF', // Blanc
          text: '#4A4A4A', // Gris foncé
          muted: '#F2F2F2', // Gris clair
        },
   
    },
  },
  plugins: [],
};
