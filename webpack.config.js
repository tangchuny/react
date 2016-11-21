//启动：npm run dev 默认端口：http://localhost:8080
var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
			//loader: 'style!css'
			loader: 'style!css!autoprefixer?{browsers:["last 2 version", "> 1%"]}',

		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		}, 
		{
	      test: /\.json$/,
	      loader: [ 'json' ],
	      include: __dirname
	   },
     	{
			test: /\.(png|jpg|gif)$/,
			//loader: 'url-loader?limit=8192'
			// name 字段指定了在打包根目录（output.path）下生成名为 images 的文件夹，并在原图片名前加上8位 hash 值。
			//loader: 'file-loader?name=img/[hash:8].[name].[ext]' 
			loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
		},
     	{ 
     		test: /\.jsx$/, 
     		exclude: /node_modules/,
     		loader: 'jsx-loader'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("style.css", {
            allChunks: true
        })
		//new CommonsChunkPlugin('init.js'),
    	//new OpenBrowserPlugin({ url: 'http://localhost:8080' })
	]
};

module.exports = config;