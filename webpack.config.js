const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: ['./src/main'],
    output: {
        path: path.resolve('./dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['ts-loader']
            }
        ]
    }
};