const fs = require('fs');
const path = require('path');

const plugins = [];

exports.initPlugins = function (pluginDir) {
  fs.readdirSync(pluginDir).forEach(file => {
    const filePath = path.join(pluginDir, file);
    loadPlugin(filePath);
    fs.watch(filePath, (eventType) => {
      if (eventType === 'change') {
        //console.log(`File changed From Plugin path`);
        reloadPlugin(filePath);
      }
    });
  });
};

function loadPlugin(filePath) {
  try {
    const plugin = require(filePath);
    plugins.push(plugin);
//    console.log(`Plugin loaded: ${plugin.name}`);
  } catch (err) {
    console.error(`Failed to load plugin from ${filePath}:`, err.message);
  }
}

function reloadPlugin(filePath) {
  try {
    delete require.cache[require.resolve(filePath)];
    const updatedPlugin = require(filePath);
    const index = plugins.findIndex(p => p.name === updatedPlugin.name);
    if (index !== -1) {
      plugins[index] = updatedPlugin;
 //     console.log(`Plugin updated: ${updatedPlugin.name}`);
    } else {
      plugins.push(updatedPlugin);
   //   console.log(`Plugin added: ${updatedPlugin.name}`);
    }
  } catch (err) {
    console.error(`Failed to reload plugin from ${filePath}:`, err.message);
  }
}

exports.getPlugins = function () {
  return plugins;
};
