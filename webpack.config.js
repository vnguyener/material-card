const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OpptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './index.scss',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: {
            importLoaders: 2
          }},
          { loader: "sass-loader" },
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
      allChunks: true,
    })
  ],
  optimization: {
    minimizer: [
      new OpptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          safe: true,
        }
      })
    ]
  }
};

