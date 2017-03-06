var webpack = require('webpack');

module.exports = {
	entry: './client/app.jsx',
	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'./client/components'
		],
		alias: {			
			applicationStyles: 'client/app.sass'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
			{
				loader: 'babel-loader',
				query: {
				presets: ['react', 'es2015', 'stage-0']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
			}	
		]
	}
};
