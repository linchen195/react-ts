
const proxy = require('http-proxy-middleware')

module.exports = function(app: any) {
  app.use(
    proxy('/ehis-golden-key', {
      target: 'https://ehis-golden-key-stg.pingan.com.cn/',
      changeOrigin: true,
      pathRewrite: {
        '^/ehis-golden-key': 'ehis-golden-key'
      }
    })
  )
}
