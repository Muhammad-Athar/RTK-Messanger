/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        animation: {
            "loading-dots": "loading-dot 1.5s infinite",
            "loading-dot1": "loading-dot 1.5s infinite 0s",
            "loading-dot2": "loading-dot 1.5s infinite 0.5s",
            "loading-dot3": "loading-dot 1.5s infinite 1s",
        },
        keyframes: {
            "loading-dot": {
                "0%, 100%": {
                    opacity: 0,
                },
                "50%": {
                    opacity: 1,
                },
            },
        },
    },
    plugins: [],
};
