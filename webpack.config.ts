import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
    // точка входа
    entry: path.resolve(__dirname, 'src/index.ts'),

    output: {
        // имя файла со скриптами должно постоянно меняться, чтобы исключить кэширование данных
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        // очистка build папки перед сборкой нового
        clean: true
    },

    module: {
        // здесь конфигуриуем loaders, здесь происходит любая обработка файлов
        // выходящих за рамки js
        // изображения, шрифты
        rules: [
            {
                // к каким файлам применяем
                test: /\.tsx?$/,
                // что используем
                use: 'ts-loader',
                // что исключаем из проверки
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        // расширения, которые не будут указываться в импортах
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        // плагин для создания html файла с подключенными скриптами
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        // отображает процесс сборки в процентах
        new webpack.ProgressPlugin(),
    ],


    mode: 'development'
}

export default config