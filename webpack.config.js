const path = require("path");

const src = path.resolve(__dirname, "./frontend/src");
const dist = path.resolve(__dirname, "./frontend/dist");

module.exports = {
  // Input file
  entry: {
    script: path.join(src, "script.js")
  },
  // Generated file
  output: {
    filename: "[name].js",
    path: dist,
    publicPath: "/dist/"
  },
  // Switch to "production" to minify code
  mode: "development",
  // Transpile code with babel, rewriting and polyfilling code so older browsers can run it
  module: {
    rules: [
      {
        include: [src],
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                debug: true,
                // Which browsers to targets
                targets: "> 1%"
              }
            ]
          ],
          plugins: ["@babel/plugin-syntax-dynamic-import"]
        }
      }
    ]
  }
};
