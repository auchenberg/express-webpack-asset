express-webpack-asset
===============

Webpack config:
```
    var SaveHashes = require('[assets-webpack-plugin](https://github.com/sporto/assets-webpack-plugin)');

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

View helper:

```
<script src="<%= webpack_asset('main') %>"></script>

```
