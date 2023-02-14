import {BuildOptions} from "../types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths} = options
    return {
        // точка входа
        entry: paths.entry,

        output: {
            // имя файла со скриптами должно постоянно меняться, чтобы исключить кэширование данных
            filename: "[name].[contenthash].js",
            path: paths.build,
            // очистка build папки перед сборкой нового
            clean: true
        },

        module: {
            // здесь конфигуриуем loaders, здесь происходит любая обработка файлов
            // выходящих за рамки js
            // изображения, шрифты
            rules: buildLoaders(),
        },

        resolve: buildResolvers(),

        plugins: buildPlugins(options),

        mode: mode
    }
}