const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
     // 불러오려는 server 의 api path
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080', // server 주소를 넣어주면 된다.
      changeOrigin: true,
    })
  )
};
