module.exports = {
  content: [
    "./src/app/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'black-1' : '#333333',
        'black-2' : '#4F4F4F',
        'gray-1' : '#828282',
        'gray-2' : '#BDBDBD',
        'orange-1' : '#EB5757'
      },
      boxShadow: {
        '3xl' : '0px 0px 5px 1px rgba(0,0,0,0.1)'
      }
    },
    fontFamily: {
      'poppins' : ['Poppins', 'sans-serif'],
      'mulish' : ['Mulish', 'sans-serif']
    },
  },
  plugins: [],
}
