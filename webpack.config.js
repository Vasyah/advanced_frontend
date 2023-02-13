const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins


// аналог js экспорта, только для node
module.exports = {
	// точка входа
	entry: path.resolve(__dirname, 'src/index.js'),

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'build'),
		// очистка build папки перед сборкой нового
		clean: true
	},

	plugins: [
		// плагин для создания html файла с подключенными скриптами
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new webpack.ProgressPlugin(),
	],

	mode: 'development'
}