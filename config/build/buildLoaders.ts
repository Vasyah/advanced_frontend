import webpack from "webpack";

// порядок лоэдеров имеет значение!
export const buildLoaders = (): webpack.RuleSetRule[] => {
    return [
        {
            // к каким файлам применяем
            test: /\.tsx?$/,
            // что используем
            use: 'ts-loader',
            // что исключаем из проверки
            exclude: /node_modules/,
        },
    ]
}