const slsw = require("serverless-webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = (async () => {
  return {
    entry: slsw.lib.entries,
    target: "node",
    mode: "production",
    externals: ["_http_common", "encoding"],
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" },
      ],
    },
  };
})();
