  const path = require('path');
  const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入vue-loader库
  const HtmlWebpackPlugin = require('html-webpack-plugin');   //文件头部增加
  // const ExtractTextPlugin = require('extract-text-webpack-plugin');
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
  const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
  const devMode = process.env.NODE_ENV !== 'production'
  module.exports = {
      entry: './src/index.ts',    //配置启动的入口文件
      devtool: 'cheap-module-eval-source-map',//不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的
      module: {
          rules: [
              { 
                test: /\.vue$/,
                use: 'vue-loader' 
              //   loader: [
              //     {
              //         loader: 'vue-loader',
              //         options: {
              //             loaders: {
              //                 scss: [
              //                     'vue-style-loader',
              //                     MiniCssExtractPlugin.loader,
              //                     'css-loader?sourceMap',
              //                     'sass-loader?sourceMap'
              //                 ],
              //                 css: [
              //                     'vue-style-loader',
              //                     MiniCssExtractPlugin.loader,
              //                     'css-loader?sourceMap'
              //                 ]
              //             }
              //         }
              //     }
              // ]
              },//vue加载器
              {
                  test: /\.tsx?$|\.ts?$/, loader: 'ts-loader',//ts加载器
                  options: { transpileOnly: true, appendTsSuffixTo: [/.vue$/] } //认识vue文件
              },
//               { test: /\.css$/, loader: 'vue-style-loader!css-loader' },
              // {
              //   test:/\.scss$/,
              //   loader:'vue-style-loader!css-loader!sass-loader'
              // },
            {

              test: /(\.css$|\.scss$)/,
              use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                // 'postcss-loader',
                'sass-loader',
              ],
              // use: ExtractTextPlugin.extract({
              //   fallback: 'style-loader',
              //   use: ['css-loader', 'sass-loader']
              // })
            }
          ]
      },
      output: {
          filename: 'bundle.js',//输出的文件名称
          path: path.resolve(__dirname, 'dist')//输出的目录名称
      },
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      },
      plugins: [
          new VueLoaderPlugin()  //vue-loader插件加载方式
          ,new HtmlWebpackPlugin({ //此部分新增加
              filename: 'index.html',//需要自动注入的文件名称
              template: 'index.html',//需要自动注入的模板的文件名称
              inject: true//是否自动注入生成后的文件
            })
          ,new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
          })
      ],
      devtool: '#eval-source-map'
  };