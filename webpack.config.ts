import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildwebpackConfig";
import {BuildEnv} from "./config/types/config";


export default (env: BuildEnv) => {
    const mode = env.mode ?? 'development';
    const isDev = mode === 'development'
    const PORT = env.port ?? 3000

    const config: webpack.Configuration = buildWebpackConfig({
        paths: {
            entry: path.resolve(__dirname, 'src/index.ts',),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html')
        },
        mode: mode,
        isDev: isDev,
        port: PORT
    })

    return config
}