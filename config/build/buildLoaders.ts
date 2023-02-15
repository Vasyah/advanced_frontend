import webpack from "webpack";
import {BuildOptions} from "../types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// порядок лоэдеров имеет значение!
export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: true
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        // к каким файлам применяем
        test: /\.tsx?$/,
        // что используем
        use: 'ts-loader',
        // что исключаем из проверки
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}