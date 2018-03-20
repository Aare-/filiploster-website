var path = require("path");

module.exports = {    
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/',
        host: '127.0.0.1',
        port: 8080,
        open: true,
        historyApiFallback: {
          index: 'index.amp.html'
        }
    }
};
