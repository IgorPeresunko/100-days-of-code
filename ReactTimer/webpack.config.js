module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',			
			applicationStyles: 'app/styles/app.sass',
			Navigation: 'app/components/Navigation.jsx',
			Timer: 'app/components/Timer.jsx',
			Countdown: 'app/components/Countdown.jsx',
			CountdownForm: 'app/components/CountdownForm.jsx',
			TimerForm: 'app/components/TimerForm.jsx',
			Clock: 'app/components/Clock.jsx',
			Controls: 'app/components/Controls.jsx'

		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
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
