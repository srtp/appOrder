module.exports = {
  presets: ['module:metro-react-native-babel-preset'], // existing
  // add the following
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@models': './src/models',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@views': './src/views',
          '@stores': './src/stores',
          '@assets': './src/assets',
          '@layouts': './src/layouts',
          '@ui': './src/ui',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
