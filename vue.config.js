const path = require("path");

const manifestJSON = require('./public/manifest.json');

module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: './',
  // pwa: {
  //   themeColor: manifestJSON.theme_color,
  //   name: manifestJSON.short_name,
  //   msTileColor: manifestJSON.background_color,
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     swSrc: 'src/service-worker.js',
  //   },
  // },
};
