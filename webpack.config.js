const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // Точка входа
    entry: ["@babel/polyfill", './src/index.jsx'],
    // Хранилище куда складываются собранные файлы.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    devServer: {
        port: 3000
    },
    // Настройка используемых плагинов
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // Настройка модулей
    module: {
        rules: [
            {
                test: /\.(css|less|scss)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // Пресет отвечает за предустановку env, которая позволяет выполнять преобразования для ES2015+
                        // точнее преобразовывает код для старых браузеров.
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // Пресет отвечает за предустановку env, которая позволяет выполнять преобразования для ES2015+
                        // точнее преобразовывает код для старых браузеров.
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}