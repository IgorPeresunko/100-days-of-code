module.exports = {
	entry: './app/app.js',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		extensions: ['.js', '.css', '.sass',]
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
				presets: ['es2015', 'stage-0']
			},
				test: /\.js$/,
				exclude: /node_modules/
            }
		]
	}
};
