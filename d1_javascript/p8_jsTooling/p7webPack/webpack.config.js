const path = require('path');

module.exports = {
    // configurando o webpack
    mode: 'development',
    entry: './src/main.js',
    output: {
        // acessa diretorio geral até a pasta js
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // exclui a pasta node_modules
            exclude: /node_modules/,
            // testa arquivos js
            test: /\.js/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets:['@babel/env']
                }
            }
        }, {
            // deve ser instalado style-loader css-loader
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]

    },
    devtool: 'source-map'
};