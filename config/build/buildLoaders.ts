import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/config';

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

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					// подключить css-modules
					modules: {
						// какие файлы считать модулями
						auto: (restPath: string) => Boolean(restPath.includes('.module')),
						// имена файлов
						localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	}
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
		imageLoader,
	]
}
