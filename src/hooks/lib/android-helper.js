
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {
  setAppName: function() {
    var manifest = utilities.readBuildGradle();
    manifest = manifest.replace(/(<application[^>]*?) android:name="[^\"]+?"/m,'$1');
    manifest = manifest.replace('<application','<application android:name="cn.com.ihealthlabs.cordova.plugins.BugHD"');
    utilities.writeBuildGradle(manifest);
  },
  removeAppName: function() {
    var manifest = utilities.readBuildGradle();
    manifest = manifest.replace('<application android:name="cn.com.ihealthlabs.cordova.plugins.BugHD"','<application');
    utilities.writeBuildGradle(manifest);
  }
};
