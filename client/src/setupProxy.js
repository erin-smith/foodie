x
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/api/chefs", "/api/locals"], { target: "http://localhost:3001" })
    );
  };