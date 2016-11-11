//启动：npm run dev 默认端口：http://localhost:8080
var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	resolve: {
	   extensions: ['', '.js', '.jsx'],
	 },
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}

		}, {
			test: /\.coffee$/,
			loader: "coffee-loader"
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		}, 
		
     	{
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		},
     	{ 
     		test: /\.jsx$/, 
     		exclude: /node_modules/,
     		loader: 'jsx-loader'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		//new CommonsChunkPlugin('init.js'),
    	//new OpenBrowserPlugin({ url: 'http://localhost:8080' })
	]
};

module.exports = config;