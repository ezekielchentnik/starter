import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/entry.js",
  output: {
    file: "public/bundle.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    babel(),
    production && terser() // minify, but only in production
  ]
};
