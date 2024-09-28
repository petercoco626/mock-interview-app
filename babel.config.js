module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
            '.otf',
            '.png',
            '.svg',
            '.jpeg',
          ],
          alias: {
            '@': './',
            '@/assets': './assets',
            '@/components': './components',
            '@/constants': './constants',
            '@/hooks': './hooks',
            '@/libs': './libs',
            '@/screens': './screens',
            '@/service': './service',
            '@/types': './types',
          },
        },
      ],
    ],
  };
};
