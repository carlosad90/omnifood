/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/images/hero/hero.png')",
        "form-img": "url('./assets/images/customers/eating.jpg')",
        "login-img": "url('./assets/images/meals/login-Image.jpg')",
      },
      colors: {
        primary: "#e67e22",
        "primary-hover": "#cf711f",
        heading: "#333",
        secondary: "#555",
        tertiary: "#45260a",
        section: "#fdf2e9",
        steps: "#ddd",
        tag1: "#e8c2d4",
        tag2: "#64dc77",
        tag3: "#cec99e",
        tag4: "#eed374",
        tag5: "#d7beff",
        tag6: "#f39f52",
        tag7: "#82ae8e",
      },
    },
  },
  plugins: [],
};
