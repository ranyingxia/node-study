const webpack = require('webpack');
const path = require('path');
const sourcePath = path.join(__dirname, '../pages');
const outputPath = path.join(__dirname, './../static');

module.exports = {
	entry: {
		'home' : './pages/home/index.js',
		 vendor: ['react', 'react-dom'],
	},
	output: {
		path: outputPath,
		publicPath: './../static/',
		filename: 'js/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader?cacheDirectory!eslint',	// camelcase这个包用了es6的语法导致uglify不能正确运行，因此需要指定babel解析
						query: {
								cacheDirectory: true,
						}
					}
				],
			},
			{
				test : /\.css$/,
        loader : 'style-loader!css-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
				sourcePath,
				'node_modules'
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor'],
				minChunks: Infinity,
				filename: 'js/[name].js'
		}),
	]
}