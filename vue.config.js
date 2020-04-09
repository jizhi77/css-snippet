const path = require('path')

module.exports = {
    publicPath: '/css-snippet',
    outputDir: 'docs',
    lintOnSave: false,
    chainWebpack: config => {
        console.log(config)
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src'))
    }
}
