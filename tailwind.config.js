// tailwind.config.js
module.exports = {
  // mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Astagina', 'serif']
    },
    extend: {
      colors: {
        //beiges
        my_white: '#fff7ef',
        cream_1: '#ffe5ce',
        cream_2: '#ffce95',

        //oranges
        orange: '#fd7542',
        brown_1: '#7d381e',
        brown_2: '#3e291d',

        //verts
        green_1: '#b4bf60',
        green_2: '#5a672e',
        green_3: '#324001',
      },
      screens: {
        // big: { min: '800px', max: '868px' },
      },

    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
