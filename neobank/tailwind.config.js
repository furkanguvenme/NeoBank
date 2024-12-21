export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        faiz: "url('./src/assets/faiz.jpg')",
        bilesik: "url('./src/assets/bilesik.webp')",
        kredi: "url('./src/assets/kredi.jpg')",
        hisse: "url('./src/assets/hisse.jpg')",
      },
    },
  },
  plugins: [],
};
