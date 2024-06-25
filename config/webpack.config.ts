import webpack from 'webpack';
import { BuildPaths } from './types/config';
import { buildCssLoader } from './build/buildCssLoader';

const path = require('path');

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve((__dirname, '..', '..', 'src')),
	}

	config.resolve.modules.push(paths.src)
	config.resolve.extensions.push('.ts', '.tsx')

	config.module.rules.push(buildCssLoader(true))

	return config
}
