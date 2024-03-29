"use strict";
const path = require("path");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
	mode: isDev ? "development" : "production",
	entry: ["./client/index.js"],
	output: {
		path: __dirname,
		filename: "./public/bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devtool: "source-map",
	watchOptions: {
		ignored: /node_modules/,
	},
	experiments: {
		futureDefaults: true,
	},
	devServer: {
		historyApiFallback: {
			index: "/",
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [path.resolve(__dirname, "node_modules")],
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
