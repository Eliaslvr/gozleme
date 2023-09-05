module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',  // Injecte le CSS dans le DOM.
            'css-loader',    // Charge les fichiers CSS.
            'sass-loader'     // Compile le SASS en CSS.
          ],
        },
      ],
    },
    // ...
  };