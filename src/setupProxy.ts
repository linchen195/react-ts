
const { createProxyMiddleware } = require('http-proxy-middleware')
// app后面不要赋值类型
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/ehis-golden-key', {
      target: 'https://ehis-golden-key-stg.pingan.com.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/ehis-golden-key': '/ehis-golden-key'
      }
    })
  )
  // app.listen(3000)
}
