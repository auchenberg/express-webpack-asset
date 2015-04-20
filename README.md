express-webpack-asset
===============

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

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
  app.use(webpackAssets('./config/webpack-assets.json', {
  	devMode: true/false
  }));
```

## Options

```
  {
  	devMode: boolean // Enables development mode which disables caching of the manifest, which is useful when the manifest changes rapidly
  }
```


## Usage

Express view helper:

```
<script src="<%= webpack_asset('main') %>"></script>

```


