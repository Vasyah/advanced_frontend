import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildwebpackConfig";

export const config: webpack.Configuration = buildWebpackConfig({
    paths: {
        entry: path.resolve(__dirname, 'src/index.ts',),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }, mode: 'development'
})

export default config