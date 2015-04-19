var fs = require('fs');

module.exports = function(manifestPath) {

    var manifest;
    var isManifestLoaded = false;

    function loadManifest() {

        try {
            var data = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));    
            isManifestLoaded = true;
            return data;   
        } catch(e) {
            console.log('could not load asset manifest', e);
        }

    }

    function getAsset(path) {

        if(process.env.NODE_ENV === 'dev' || !isManifestLoaded) {
            manifest = loadManifest();
        }

        if(manifest) {
            return manifest[path];
        } else {
            return path;
        }  

    }

    return function(req, res, next) {

        res.locals.webpack_asset = getAsset;

        next();
    };

}
