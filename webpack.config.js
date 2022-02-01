const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
  }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // Эта запись используется для корректного отображения изображений как указанно в файле index.js
    // assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './styles/main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        // Используем для корретного показа изображений как указанно в файле index.js
        // type: 'asset/resource'

        // Используем для отбражения закодированных изображений
        type: 'asset/inline'
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  ...devServer(develop),
});

