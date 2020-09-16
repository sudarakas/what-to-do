const path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"), 
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }, {
                test: /\.s?css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
      }
};