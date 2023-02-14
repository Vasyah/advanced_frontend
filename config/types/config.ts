export  type BuildMode = 'production' | 'development'

export interface BuildPaths {
    // путь до энтри поинта
    entry: string;
    // путь до папки сборки
    build: string;
    // путь до файла html
    html: string;
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    // порт для dev-serve
    port: number
    isDev: boolean,
}

export interface BuildEnv {
    mode: BuildMode
    port: number
}