const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/scripts/main.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jpg', 'png']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: './app',
        port: 8001
    },
    plugins: [
        new CopyPlugin([
            { from: 'app/index.html', to: './' },
        ]),
    ],
};