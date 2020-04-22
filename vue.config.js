module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.101:8083',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      },
    }
  }
};