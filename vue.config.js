const resolve = require('path').resolve

// vue.config.js
module.exports = {
    // 选项...
    baseUrl: './',
    css: {
        extract: false,
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('images', resolve(__dirname, './src/images'))
            .set('styles', resolve(__dirname, './src/styles'))
        
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))

    }
}


function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                resolve(__dirname, './src/styles/global.styl'),
            ],
        })
}  