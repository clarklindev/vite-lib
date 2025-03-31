/** @type {import('tailwindcss').Config} */
export default {
    content: ['./lib/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [],
    // Important for component libraries
    corePlugins: {
        preflight: false // Disable Tailwind's reset
    },
    // This ensures your library's styles don't conflict with the consuming app
    important: true
};
