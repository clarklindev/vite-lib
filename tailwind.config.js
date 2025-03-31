/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@fightclub/**/*.{js,ts,jsx,tsx}'],
    purge: false,
    theme: {
        extend: {}
    },
    plugins: []
};
