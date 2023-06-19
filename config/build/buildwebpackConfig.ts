import { BuildOptions } from "../types/config";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths } = options;
  return {
    mode: mode,
    // точка входа
    entry: paths.entry,

    output: {
      // имя файла со скриптами должно постоянно меняться, чтобы исключить кэширование данных
      filename: "[name].[contenthash].js",
      path: paths.build,
      // очистка build папки перед сборкой нового
      clean: true,
    },

    module: {
      // здесь конфигуриуем loaders, здесь происходит любая обработка файлов
      // выходящих за рамки js
      // изображения, шрифты
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),

    plugins: buildPlugins(options),

    // включение source-map для оптимиации процесса отладки во время разработки
    devtool: options.isDev ? "inline-source-map" : undefined,

    devServer: buildDevServer(options),
  };
};
