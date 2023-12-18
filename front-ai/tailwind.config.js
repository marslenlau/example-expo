/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this! Prioridad de estilos necesario para antdesign para que colo primero los estuilos de antd
  },
}

