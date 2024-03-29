/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./templates/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans]
      }
		},
	},
	plugins: [],
};
