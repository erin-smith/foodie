const { createProxyMiddleware } = require('http-proxy-middleware');
     
    module.exports = function(app) {
        app.use(createProxyMiddleware('/api/chefs', { target: 'http://localhost:3001' }));
        app.use(createProxyMiddleware('/api/locals', { target: 'http://localhost:3001' }));
    };