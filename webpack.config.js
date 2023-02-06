const path = require("path");


// аналог js экспорта, только для node
module.exports = {
	// точка входа
	entry: path.resolve(__dirname, 'src/index.js'),

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'build')
	},

	mode: 'development'
}