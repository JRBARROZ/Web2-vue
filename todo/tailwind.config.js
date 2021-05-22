module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:{
      btn: '0px 0px 0px 2px rgba(0, 0, 0, 0.3)'
    },
    extend: {
      colors:{
        todoGray:{
          DEFAULT: "#333"
        }
      },
      backgroundImage: theme => ({
        'texture-bg': "url('/tb.png')",
      }),
      fontFamily:{
          'lobster': ['Lobster', 'cursive'],
          'nunito': ['Nunito', 'Sans-serif']
      },
      keyframes : {
        shake :{
          '0%' : {transform: 'rotate(10deg)'},
          '50%' : {transform: 'rotate(-10deg)'},
          '100%' : {transform: 'rotate(10deg)'},
        },
        slideBottom : {
          'from':{opacity: 0,transform: 'translateY(30px)' },
          'to': {opacity: 1, transform: 'translateY(0px)'}
        },
        slideLeft : {
          'from':{opacity: 0,transform: 'translateX(-30px)' },
          'to': {opacity: 1, transform: 'translateX(0px)'}
        }
      },
      animation:{
        shake: 'shake 2s infinite linear',
        slideBottom: 'slideBottom .3s forwards ease',
        slideLeft: 'slideLeft .3s forwards ease',
      }
    },
    fill: theme => ({
      'white': theme('colors.gray.100'),
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
