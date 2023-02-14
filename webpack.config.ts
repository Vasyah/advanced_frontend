import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildwebpackConfig";


const mode = 'development';
const isDev = mode === 'development'
const PORT = 3000

export const config: webpack.Configuration = buildWebpackConfig({
    paths: {
        entry: path.resolve(__dirname, 'src/index.ts',),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
    mode: mode,
    isDev: isDev,
    port: PORT
})

export default config