const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "build"),
    open: true,
    hot: true,
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "swc-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
