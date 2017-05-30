const path = require('path');

module.exports = {
    entry: "./app",
    output: {
        // on produit le fichier dans dist
        path: path.resolve(__dirname, "app"),
        filename: "bundle.js"
    },
    // ici on crée un server en disant son port etc...
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        port: 9000,
        //historyApiFallback: true
    },
    // est un source map, donc permet de dire en fonction de l'erreur dans le fichier bundle ou cette 
    // erreur se trouve dans le fichier d'origine de l'erreur. (Bundle est la ou tous les fichiers sont mis en communs)
    devtool: 'cheap-module-eval-source-map',

    module: {
        loaders: [
            {
                // quand on rencontre un fichier.js ...
                test: /\.js$/,
                exclude: /(node_modules)/,
                //...on fait appel a babel a travers le loader
            loader: "babel-loader",
                query: {
                    presets: [['env', { 
                        modules: false,
                        targets: { browsers: ["last 2 versions"] }
                    }]]
                }
            },

            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },

            {
				test: /\.html$/,
				exclude: [/node_modules/],
				loader: 'raw-loader',
			},

        ]
    }

}