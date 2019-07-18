{ context: '/Users/jhall/Sites/justinwhall-gatasby',
  entry: 
   { app: '/Users/jhall/Sites/justinwhall-gatasby/.cache/production-app' },
  output: 
   { filename: '[name]-[contenthash].js',
     chunkFilename: '[name]-[contenthash].js',
     path: '/Users/jhall/Sites/justinwhall-gatasby/public',
     publicPath: '/' },
  module: 
   { rules: 
      [ { test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: 
           [ { options: {},
               loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/gatsby/dist/utils/babel-loader.js' } ] },
        { test: /\.ya?ml/,
          use: 
           [ { options: {},
               loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/json-loader/index.js' },
             { options: {},
               loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/yaml-loader/index.js' } ] },
        { use: 
           [ { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/ },
        { use: 
           [ { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(mp4|webm|wav|mp3|m4a|aac|oga|flac)$/ },
        { use: 
           [ { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/file-loader/dist/cjs.js',
               options: { name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.pdf$/ },
        { oneOf: 
           [ { use: 
                [ { options: {},
                    loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/css-loader/index.js',
                    options: 
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       modules: true,
                       importLoaders: 1 } },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/postcss-loader/lib/index.js',
                    options: 
                     { ident: 'postcss-1',
                       sourceMap: false,
                       plugins: [Function: plugins] } } ],
               test: /\.module\.css$/ },
             { use: 
                [ { options: {},
                    loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/css-loader/index.js',
                    options: 
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 1 } },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/postcss-loader/lib/index.js',
                    options: 
                     { ident: 'postcss-2',
                       sourceMap: false,
                       plugins: [Function: plugins] } } ],
               test: /\.css$/ } ] },
        { oneOf: 
           [ { test: /\.module\.s(a|c)ss$/,
               use: 
                [ { options: {},
                    loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/css-loader/index.js',
                    options: 
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       modules: true,
                       importLoaders: 2 } },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/postcss-loader/lib/index.js',
                    options: 
                     { ident: 'postcss-4',
                       sourceMap: false,
                       plugins: [Function: plugins] } },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/gatsby-plugin-purgecss/loader.js',
                    options: 
                     { content: 
                        [ '/Users/jhall/Sites/justinwhall-gatasby/src/**/!(*.d).{ts,js,jsx,tsx}' ],
                       rejected: true,
                       printRejected: false,
                       printAll: true,
                       debug: true,
                       ignore: [],
                       whitelistPatterns: [ /start/ ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/sass-loader/lib/loader.js',
                    options: { sourceMap: false, plugins: [] } } ] },
             { test: /\.s(a|c)ss$/,
               use: 
                [ { options: {},
                    loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/css-loader/index.js',
                    options: 
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 2 } },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/postcss-loader/lib/index.js',
                    options: 
                     { ident: 'postcss-3',
                       sourceMap: false,
                       plugins: [Function: plugins] } },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/gatsby-plugin-purgecss/loader.js',
                    options: 
                     { content: 
                        [ '/Users/jhall/Sites/justinwhall-gatasby/src/**/!(*.d).{ts,js,jsx,tsx}' ],
                       rejected: true,
                       printRejected: false,
                       printAll: true,
                       debug: true,
                       ignore: [],
                       whitelistPatterns: [ /start/ ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/sass-loader/lib/loader.js',
                    options: { sourceMap: false, plugins: [] } } ] } ] },
        { use: 'svg-react-loader', test: /\.svg$/ },
        { use: 
           [ { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/ },
        { test: /\.css$/,
          use: 
           [ { loader: '/Users/jhall/Sites/justinwhall-gatasby/node_modules/gatsby-plugin-purgecss/loader.js',
               options: 
                { content: 
                   [ '/Users/jhall/Sites/justinwhall-gatasby/src/**/!(*.d).{ts,js,jsx,tsx}' ],
                  rejected: true,
                  printRejected: false,
                  printAll: true,
                  debug: true,
                  ignore: [],
                  whitelistPatterns: [ /start/ ],
                  whitelist: [ 'html', 'body' ] } } ] } ] },
  plugins: 
   [ IgnorePlugin {
       options: { resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ },
       checkIgnore: [Function: bound checkIgnore] },
     DefinePlugin {
       definitions: 
        { 'process.env': 
           { NODE_ENV: '"production"',
             PUBLIC_DIR: '"/Users/jhall/Sites/justinwhall-gatasby/public"',
             BUILD_STAGE: '"build-javascript"',
             GATSBY_BUILD_STAGE: '"build-javascript"' },
          __PATH_PREFIX__: '""' } },
     MiniCssExtractPlugin {
       options: 
        { filename: '[name].[contenthash].css',
          chunkFilename: '[name].[contenthash].css' } },
     { apply: [Function: apply] } ],
  target: 'web',
  devtool: 'source-map',
  performance: { hints: false },
  mode: 'production',
  resolveLoader: 
   { modules: 
      [ '/Users/jhall/Sites/justinwhall-gatasby/node_modules',
        '/Users/jhall/Sites/justinwhall-gatasby/node_modules/gatsby/dist/loaders',
        'node_modules' ] },
  resolve: 
   { extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ],
     modules: 
      [ '/Users/jhall/Sites/justinwhall-gatasby/node_modules',
        'node_modules' ],
     alias: 
      { 'gatsby$': '/Users/jhall/Sites/justinwhall-gatasby/.cache/gatsby-browser-entry.js',
        '@babel/runtime': '/Users/jhall/Sites/justinwhall-gatasby/node_modules/@babel/runtime',
        'core-js': '/Users/jhall/Sites/justinwhall-gatasby/node_modules/core-js',
        'react-hot-loader': '/Users/jhall/Sites/justinwhall-gatasby/node_modules/react-hot-loader',
        'react-lifecycles-compat': '/Users/jhall/Sites/justinwhall-gatasby/.cache/react-lifecycles-compat.js',
        'create-react-context': '/Users/jhall/Sites/justinwhall-gatasby/.cache/create-react-context.js' } },
  node: { __filename: true },
  optimization: 
   { runtimeChunk: { name: 'webpack-runtime' },
     splitChunks: { name: false },
     minimizer: 
      [ TerserPlugin {
          options: 
           { test: /\.js(\?.*)?$/i,
             warningsFilter: [Function: warningsFilter],
             extractComments: false,
             sourceMap: true,
             cache: true,
             cacheKeys: [Function: cacheKeys],
             parallel: true,
             include: undefined,
             exclude: /\.min\.js/,
             minify: undefined,
             terserOptions: 
              { output: { comments: /^\**!|@preserve|@license|@cc_on/i },
                ecma: 8,
                ie8: false } } },
        OptimizeCssAssetsWebpackPlugin {
          pluginDescriptor: { name: 'OptimizeCssAssetsWebpackPlugin' },
          options: 
           { assetProcessors: 
              [ { phase: 'compilation.optimize-chunk-assets',
                  regExp: /\.css$/g,
                  processor: [Function: processor] } ],
             canPrint: undefined,
             assetNameRegExp: /\.css$/g,
             cssProcessor: { [Function: creator] process: [Function] },
             cssProcessorOptions: {},
             cssProcessorPluginOptions: {} },
          phaseAssetProcessors: 
           { 'compilation.optimize-chunk-assets': 
              [ { phase: 'compilation.optimize-chunk-assets',
                  regExp: /\.css$/g,
                  processor: [Function: processor] } ],
             'compilation.optimize-assets': [],
             emit: [] },
          deleteAssetsMap: {} } ] } }