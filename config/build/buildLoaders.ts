import webpack from "webpack";

// порядок лоэдеров имеет значение!
export const buildLoaders = (): webpack.RuleSetRule[] => {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
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