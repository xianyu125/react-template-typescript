const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco')
const path = require('path')

module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  style: {
    modules: {
      localIdentName: '',
    },
    css: {
      loaderOptions: {
        
        /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */
      },
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        return cssLoaderOptions
      },
    },
    sass: {
      loaderOptions: {
        /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */
      },
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions
      },
    },
    postcss: {
      mode: 'extends' /* (default value) */ || 'file',
      // plugins: [require('plugin-to-append')], // Additional plugins given in an array are appended to existing config.
      // plugins: (plugins) => [require('plugin-to-prepend')].concat(plugins), // Or you may use the function variant.
      env: {
        autoprefixer: {
          /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */
        },
        stage: 3 /* Any valid stages: https://cssdb.org/#staging-process. */,
        features: {
          /* Any CSS features: https://preset-env.cssdb.org/features. */
        },
      },
      loaderOptions: {
        /* Any postcss-loader configuration options: https://github.com/postcss/postcss-loader. */
      },
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        return postcssLoaderOptions
      },
    },
  },
  eslint: {
    enable: true /* (default value) */,
    mode: 'extends' /* (default value) */ || 'file',
    configure: {
      /* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */
    },
    configure: (eslintConfig, { env, paths }) => {
      return eslintConfig
    },
    pluginOptions: {
      /* Any eslint plugin configuration options: https://github.com/webpack-contrib/eslint-webpack-plugin#options. */
    },
    pluginOptions: (eslintOptions, { env, paths }) => {
      return eslintOptions
    },
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value)  */,
  },
  webpack: {
    alias: {
      // 这里尝试过只能用英文代替，不能用特殊符号，不然eslint会报错
      app: path.resolve(__dirname, 'src/app'),
     
    },
    // extensions: [".tsx", ".ts", ".jsx", ".js"],
    plugins: {
      add: [] /* An array of plugins */,
      add: [
        // plugin1,
        // [plugin2, 'append'],
        // [plugin3, 'prepend'] /* Specify if plugin should be appended or prepended */,
      ] /* An array of plugins */,
      remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig
    },
  },
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */,
    },
    configure: {
      /* Any Jest configuration options: https://jestjs.io/docs/en/configuration */
    },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      return jestConfig
    },
  },
  devServer: {
    /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver */
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    return devServerConfig
  },
  plugins: [
    {
      plugin: {
        overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
          return cracoConfig
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
          return webpackConfig
        },
        overrideDevServerConfig: ({
          devServerConfig,
          cracoConfig,
          pluginOptions,
          context: { env, paths, proxy, allowedHost },
        }) => {
          return devServerConfig
        },
        overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context: { env, paths, resolve, rootDir } }) => {
          return jestConfig
        },
      },
      options: {},
    },
  ],
}
