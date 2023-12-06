import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/config';
import { buildCssLoader } from './buildCssLoader';

// порядок лоэдеров имеет значение!
export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
	const imageLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const cssLoader = buildCssLoader(options.isDev)

	const babelLoader = {
		test: /\.m?js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	}

	const typescriptLoader = {
		// к каким файлам применяем
		test: /\.tsx?$/,
		// что используем
		use: 'ts-loader',
		// что исключаем из проверки
		exclude: /node_modules/,
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	return [
		typescriptLoader,
		cssLoader,
		svgLoader,
		babelLoader,
		imageLoader,
	]
}
