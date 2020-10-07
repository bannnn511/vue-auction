module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxOptions: {
      exclude: [/OneSignal.*\.js$/],
    },
  },
};
