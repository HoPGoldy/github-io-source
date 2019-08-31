const { resolve } = require('path')

// vue.config.js
module.exports = {
    // 选项...
    baseUrl: './',
    configureWebpack: {
        resolve: {
            alias: {
                'images': resolve('src/images')
            }
        }
    }
}