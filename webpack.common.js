const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: "index.html",
			inject: true,
			template: path.resolve(__dirname, "src", "index.html"),
		}),
	],
};
