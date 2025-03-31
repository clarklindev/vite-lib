/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@fightclub/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [],
    safelist: [
        {
            pattern: /^(text|bg|border)-(red|blue|green|yellow|gray|white|black)-(100|200|300|400|500|600|700|800|900)$/
        }
    ]
};
