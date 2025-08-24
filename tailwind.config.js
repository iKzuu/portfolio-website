/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "pattern": "url('https://i0.wp.com/www.thewargamespot.com/wp-content/uploads/2017/03/dark-pattern-backgrounds-wallpaper-2.jpg?fit=1600%2C1000&ssl=1')",
                "about-pattern": "url('')",
            }
        },
    },
    plugins: [],
};