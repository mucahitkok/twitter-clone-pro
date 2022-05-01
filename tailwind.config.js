module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          base : "hsl(203, 89%, 53%)",
          dark : "hsl(203, 89%, 40%)",
          light : "hsl(203, 89%, 90%)"
        },
        gray : {
          dark : "#657786",
          light :"#AAB8C2",
          extraLight :"#E1E8ED",
          lightst : "#F5F8FA"
        },
        black : "#14171A"
      }
    },
  },
  plugins: [],
}