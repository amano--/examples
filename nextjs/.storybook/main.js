module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
