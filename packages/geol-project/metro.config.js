/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const fs = require('fs');
const {getDefaultConfig} = require('metro-config');

let blacklist,
  getPolyfills,
  sourceExts = ['ts', 'tsx'];

// Get blacklist factory
try {
  blacklist = require('metro-bundler/src/blacklist');
} catch (e) {
  blacklist = require('metro-config/src/defaults/blacklist');
}

// Get default react-native polyfills
try {
  getPolyfills = require('react-native/rn-get-polyfills');
} catch (e) {
  getPolyfills = () => [];
}

// See if project has custom polyfills, if so, include the path to them
try {
  let customPolyfills = require.resolve('./polyfills.js');
  getPolyfills = (function (originalGetPolyfills) {
    return () => originalGetPolyfills().concat(customPolyfills);
  })(getPolyfills);
} catch (e) {}

const moduleBlacklist = [];

const baseModulePath = path.resolve(__dirname, 'node_modules');

// NOTE: Scoped modules hasn't been fully tested yet. Please respond to
// let th317erd know if this code works with scoped modules
function getSymlinkedModules() {
  function checkModule(fileName, alternateRoots, modulePath) {
    try {
      let fullFileName = path.join(modulePath, fileName),
        stats = fs.lstatSync(fullFileName);

      if (stats.isSymbolicLink()) {
        let realPath = fs.realpathSync(fullFileName);

        if (alternateRoots.indexOf(realPath) === -1) {
          alternateRoots.push(realPath);
          checkAllModules(
            path.resolve(realPath, './node_modules'),
            alternateRoots,
          );
        }
      }
    } catch (e) {}
  }

  function checkAllModules(modulePath, alternateRoots) {
    var stats = fs.lstatSync(modulePath);
    if (!stats.isDirectory()) {
      return alternateRoots;
    }

    fs.readdirSync(modulePath).forEach((fileName) => {
      if (fileName.charAt(0) === '.') {
        return;
      }

      if (fileName.charAt(0) !== '@') {
        checkModule(fileName, alternateRoots, modulePath);
      } else {
        checkAllModules(path.join(modulePath, fileName), alternateRoots);
      }
    });

    return alternateRoots;
  }

  return checkAllModules(baseModulePath, []);
}

function getExtraModulesForAlternateRoot(fullPath) {
  var packagePath = path.join(fullPath, 'package.json'),
    packageJSON = require(packagePath),
    alternateModules = [].concat(
      Object.keys(packageJSON.dependencies || {}),
      Object.keys(packageJSON.devDependencies || {}),
      Object.keys(packageJSON.peerDependencies || {}),
    ),
    extraModules = {};

  for (var i = 0, il = alternateModules.length; i < il; i++) {
    var moduleName = alternateModules[i];
    extraModules[moduleName] = path.join(baseModulePath, moduleName);
  }

  return extraModules;
}

// rewrite this for including automatically from package.json!
//alternate roots (outside of project root)
var alternateRoots = getSymlinkedModules(),
  //resolve external package dependencies by forcing them to look into path.join(__dirname, "node_modules")
  extraNodeModules = alternateRoots.reduce((obj, item) => {
    Object.assign(obj, getExtraModulesForAlternateRoot(item));
    return obj;
  }, {});

if (alternateRoots && alternateRoots.length) {
  module.exports = (async () => {
    const {
      resolver: {sourceExts, assetExts},
    } = await getDefaultConfig();
    return {
      transformer: {
        transformer: {
          getTransformOptions: async () => ({
            transform: {
              experimentalImportSupport: false,
              inlineRequires: false,
            },
          }),
        },
      },
      resolver: {
        assetExts: assetExts.filter((ext) => ext !== 'svg' && ext !== 'scss'),
        sourceExts: [...sourceExts, 'svg'],
        blacklistRE: blacklist(moduleBlacklist),
        extraNodeModules: extraNodeModules,
      },
      serializer: {
        getPolyfills,
      },
      projectRoot: path.resolve(__dirname),
      watchFolders: alternateRoots,
    };
  })();
}
