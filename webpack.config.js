const path = require('path');

const config = {
    devtool: 'source-map',
    entry: [
        './src/main'
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.tsx'
        ]
    }
};

module.exports = config;
