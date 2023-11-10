export default {
    dev: {
        '/api': {
            // 要代理的地址
            target: 'http://localhost: 2000',
            ws: false,
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        }
    },
    test: {
        '/api/': {
            // 要代理的地址
            target: 'http://localhost: 2000',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        }
    },
    pre: {
        '/api/': {
            // 要代理的地址
            target: 'http://localhost: 2000',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        }
    }
};