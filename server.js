const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = express();


// const isProduction = process.env.NODE_ENV === 'production';

config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)},
        // API_HOST: JSON.stringify(process.env.API_HOST || 'http://localhost:8080'),
    }),
];


config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoEmitErrorsPlugin());

config.entry =  [
    'webpack-hot-middleware/client',
    config.entry,
];

//returns a compliler instance
const compliler = webpack(config);


const statsConf = {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
};

// add hot reload middleware
app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath, 
    contentBase: 'src',
    stats: statsConf,
}));
app.use(webpackHotMiddleware(compliler));


app.use(express.static(__dirname));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> listening on port 3000');
})

