/*global SystemJS*/

SystemJS.config({
    baseURL: './',

    packages: {
        'dist': {
            defaultExtension: 'js'
        }
    },

    map: {
        preact: 'node_modules/preact/dist/preact.js',
        redux: 'node_modules/redux/dist/redux.js'
    }
});