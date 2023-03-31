const path = require('path');

module.exports = {
    resolve: {
		fallback: {
			fs: false
		},
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.sass']
    },
    entry: {
        'app': './src/index.ts'
    },

    /*
    =============================
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
    */

    output: {
        globalObject: 'this',
        //library: "MY_NAME",
        libraryTarget: "umd",
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },

    module: {
        rules: [
            {
				test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, '../node_modules' ),
                options: {  
				  'presets': [
					  '@babel/preset-env',
					  '@babel/preset-react',
					  '@babel/preset-typescript',
					  {
						plugins: [
						  '@babel/plugin-proposal-class-properties'
						]
					  }	
				  ]
                }
			}
	
			
        ],
		
		

    },
};


