import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({
	test: /\.s[ac]ss$/i,
	use: [
		// Creates `style` nodes from JS strings
		isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
		// Translates CSS into CommonJS
		{
			loader: 'css-loader',
			options: {
				// подключить css-modules
				modules: {
					// какие файлы считать модулями
					auto: (restPath: string) => Boolean(restPath.includes('.module')),
					// имена файлов
					localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
				},
			},
		},
		// Compiles Sass to CSS
		'sass-loader',
	],
})
