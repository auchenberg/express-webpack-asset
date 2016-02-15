var fs = require('fs')
var path = require('path')

function extend(target) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function (source) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  });
  return target;
}

module.exports = function (manifestPath, options) {
  var manifest
  var isManifestLoaded = false

  options = options || {
    devMode: false
  }

  function loadManifest () {
    try {
      var data = {};

      if (fs.statSync(manifestPath).isDirectory()) {
        var manifestFiles = fs.readdirSync(manifestPath);
        if (manifestFiles.length === 0) {
          console.error('there are no asset manifest', e)
        }
        manifestFiles.forEach(function (manifest) {
          extend(data, JSON.parse(fs.readFileSync(path.resolve(manifestPath, manifest), 'utf8')));
        });
      } else {
        data = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
      }

      isManifestLoaded = true
      return data
    } catch(e) {
      console.log('could not load asset manifest', e)
    }
  }

  function getAsset (path) {
    if (options.devMode || !isManifestLoaded) {
      manifest = loadManifest()
    }

    if (manifest) {
      return manifest[path]
    } else {
      return path
    }
  }

  return function (req, res, next) {
    res.locals.webpack_asset = getAsset
    next()
  }

}
