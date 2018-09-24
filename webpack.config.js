module.exports = {
  entry: "./src/Select.js",
  mode: "production",
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "react-select.js",
    libraryTarget: "commonjs2",
  },
  optimization: {
    minimize: true,
  },
  externals: {
    react: {
      commonjs2: "react"
    },
    "react-dom": {
      commonjs2: "react-dom"
    },
    "create-react-class": {
      commonjs2: "create-react-class",
    }
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }
      }
    ]
  }
};
