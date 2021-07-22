//webpack.base.config.js 是webpack在不同环境的公共配置
const path = require('path')
const utils = require("./utils")
// const px2rem = require("postcss-px2rem")
module.exports = {
    // 入口
    entry: {
        app: "./src/index" 
    },
    // 出口
    output: {
        path : utils.resolve("../dist"),
        filename: "js/[name].[hash].js",
        publicPath: "/" // 打包后的资源的访问路径前缀
    },
    resolve: {
        extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            '@': path.join(__dirname, '..', "src") // 在项目中使用@符号代替src路径，导入文件路径更方便
        }
    },
    // 模块
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /(node_modules | bower_components)/, //屏蔽不需要处理的文件（文件夹）（可选）
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react',
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader', //创建<tyle></tyle>
                    },
                    {
                        loader: 'css-loader', //转换css
                        // options: {
                        //     importLoaders: 1,
                        // },
                    },
                    // {
                    //     loader: 'px2rem-loader',
                    //     options: {
                    //         remUnit: 75,
                    //         remPrecision: 8
                    //     }
                    // },
                    // {
                    //     loader:require.resolve('px2rem-loader'),
                    //       options: {
                    //         importLoaders:1,
                    //           remUnit:76.8,//这里是因为给的设计图是按照768*1024pad的尺寸来的，因此设置啦这个单位，一般750手机设计图单位设置为75
                    //           min:2
                    //       },
                    //   },
                    //   {
                    //     loader: require.resolve('postcss-loader'),
                    //     options: {
                    //       ident: 'postcss',
                    //       plugins: () => [
                    //         require('postcss-flexbugs-fixes'),
                    //         autoprefixer({
                    //           browsers: [
                    //             '>1%',
                    //             'last 4 versions',
                    //             'Firefox ESR',
                    //             'not ie < 9', // React doesn't support IE8 anyway
                    //           ],
                    //           flexbox: 'no-2009',
                    //         }),
                    //       ],
                    //     },
                    //   },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader', //编译less-css
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
   
}