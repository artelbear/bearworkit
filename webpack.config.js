const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/bearworkit'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery'
		// })
	]
};