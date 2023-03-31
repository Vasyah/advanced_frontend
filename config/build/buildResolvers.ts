import webpack from "webpack";
import {BuildOptions} from "../types/config";

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
    return {
        // расширения, которые не будут указываться в импортах
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}