import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from '../types/config'

export const buildPlugins = (
	options: BuildOptions,
): webpack.WebpackPluginInstance[] => [
	// плагин для создания html файла с подключенными скриптами
	new HtmlWebpackPlugin({
		template: options.paths.html,
	}),
	// отображает процесс сборки в процентах
	new webpack.ProgressPlugin(),
	new MiniCssExtractPlugin({
		// при асинхронной подгрузки
		chunkFilename: 'css/[name].[contenthash:8].css',
		filename: 'css/[name].[contenthash:8].css',
	}),
	// https://webpack.js.org/plugins/define-plugin/
	new webpack.DefinePlugin({
		__IS_DEV__: JSON.stringify(options.isDev),
	}), new webpack.HotModuleReplacementPlugin(),
]
