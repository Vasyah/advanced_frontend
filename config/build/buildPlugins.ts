import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "../types/config";

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        // плагин для создания html файла с подключенными скриптами
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
        // отображает процесс сборки в процентах
        new webpack.ProgressPlugin(),
    ]
}