express-webpack-asset
===============

Middleware to load hashed webpack assets, in combiation with https://github.com/sporto/assets-webpack-plugin


## Configuration

Webpack config:
```
    var SaveHashes = require('assets-webpack-plugin]');

    plugins: [
        new SaveHashes({path: path.join(__dirname, 'config')})
    ],
    entry: './main.js',

    output: {
        path: path.join(__dirname, '.tmp', 'public', 'app'),
        filename: "bundle-[name]-[hash].js",
        publicPath: "/app/"
    },
```

Express config:

```
    var webpackAssets = require('express-webpack-assets');
    app.use(webpackAssets('./config/webpack-assets.json'));
```

## Usage

Express view helper:

```
<script src="<%= webpack_asset('main') %>"></script>

```
