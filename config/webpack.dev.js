const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
	mode: 'development',
	devServer: {
		port: 8080,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: require.resolve('ts-loader'),
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};

module.exports = devConfig;
