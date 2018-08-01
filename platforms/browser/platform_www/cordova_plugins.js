cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-restful/www/RESTful.js",
        "id": "cordova-plugin-restful.RESTful",
        "pluginId": "cordova-plugin-restful",
        "clobbers": [
            "cordova.plugins.RESTful"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-restful": "0.0.3",
    "cordova-plugin-whitelist": "1.3.3"
}
// BOTTOM OF METADATA
});