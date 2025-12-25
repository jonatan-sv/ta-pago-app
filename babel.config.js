module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".jsx",
            ".json",
            ".tsx",
            ".ts",
          ],
          alias: {
            "@shared": "./src/shared",
            "@consts": "./src/shared/constants",
            "@assets": "./src/assets",
            "@models": "./src/models",
            "@contexts": "./src/contexts",
          },
        },
      ],
    ],
  };
};
