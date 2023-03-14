// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         blue: "#1F3368",
//         orange: "#F68C1F",
//         white: "#F2F2F1",
//       },
//       fontFamily: {
//         Roboto: ["Roboto", "sans-serif"],
//       },
//       boxShadow: {
//         '3xl': '0 4px 30px 10px rgba(0, 0, 0, 0.5)',
//       }
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm':{ 'min':'0px','max':'815px'}
    },
    extend: {},
  },
  plugins: [],
}


