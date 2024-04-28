/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // daisyui: {
  //   themes: ["light", "synthwave"],
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
});

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

