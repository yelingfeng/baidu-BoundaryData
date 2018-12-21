module.exports = {
    lintOnSave: true,
    runtimeCompiler:true,
    devServer: {
        port: 8222,
        https: false,
        hotOnly: false,
        proxy: null // string | Object
    },
    pages:{
        index: {
            // page 的入口
            entry: 'example/index.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            title: 'Index Page'
        }
    }
};
