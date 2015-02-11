express-webpack-asset
===============

Webpack config:
```
    entry: './main.js',

    output: {
        path: path.join(__dirname, '.tmp', 'public', 'app'),
        filename: "bundle-[name]-[hash].js",
        publicPath: "/app/"
    },
```

View helper:

```
<script src="<%= webpack_asset('main') %>"></script>

```
