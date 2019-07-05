module.exports = {
    baseUrl: '/',
    // 将构建好的文件输出到哪里
    outputDir: 'dist',
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这
    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    pwa: {},
    devServer: {
        port: 8083,
        proxy: {
            '/api': {
                target: 'http://localhost:8083',
                pathRewrite: {
                    '^api': '/public'
                }
            }
        }
    },
    // 三方插件的选项
    pluginOptions: {
    }
}