import webpack from "webpack";

export const buildResolvers = (): webpack.ResolveOptions => {
    return {
        // расширения, которые не будут указываться в импортах
        extensions: ['.tsx', '.ts', '.js'],
    }
}