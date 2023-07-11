/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neobrutalism: "5px 5px #000",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        rocket: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(1000px, -1000px)" },
        },
        bounceRight: {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(10px, 0px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "rocket-launch": "rocket 10s linear",
        "bounce-right": "bounceRight 1.7s linear",
      },
    },
  },
  plugins: [],
};
