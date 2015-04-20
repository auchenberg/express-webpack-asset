var fs = require('fs');

module.exports = function(manifestPath, options) {

    var manifest
    var isManifestLoaded = false

    options = options || {
      devMode : false
    }

    function loadManifest() {

      try {
          var data = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
          isManifestLoaded = true
          return data
      } catch(e) {
          console.log('could not load asset manifest', e);
      }

    }

    function getAsset(path) {

      if(options.devMode || !isManifestLoaded) {
          manifest = loadManifest()
      }

      if(manifest) {
          return manifest[path]
      } else {
          return path
      }

    }

    return function(req, res, next) {
      res.locals.webpack_asset = getAsset
      next()
    };

}
