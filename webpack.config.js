const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/index.html",
          to: "index.html"
        }
      ]
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/src-sw.js",  // Path to your custom service worker
      swDest: "sw.js"  // The output service worker file
    })
  ]
};
