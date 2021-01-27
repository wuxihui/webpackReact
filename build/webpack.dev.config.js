//webpack.dev.config.js 是项目开发环境的配置
const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const px2rem = require("postcss-px2rem")

const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          // 这些是配置rem的
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            px2rem({remUnit: 75})  // 这里表示 75px = 1rem
          ],
        },
      },
      {
        loader: require.resolve('less-loader') // compiles Less to CSS
      }
    ];
    if (preProcessor) {
      loaders.push(require.resolve(preProcessor));
    }
    return loaders;
  };

module.exports = webpackMerge(baseWebpackConfig,{
    // 指定构建环境  
    mode:"development",
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'), // html模板的生成路径
            template: 'index.html',//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
        })
    ],
    // 开发环境本地启动的服务配置
    devServer: {
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true,
        contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        compress: true, // 一切服务都启用gzip 压缩：
        port: "8081", // 指定段靠谱
        publicPath: "/", // 访问资源加前缀
        proxy: {
            // 接口请求代理
        },
    }
});