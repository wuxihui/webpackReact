module.exports = {
    // plugins: {
    //   "postcss-pxtorem": {
    //     // 设计稿 375:37.5
    //     // 设计稿：750:75
    //     // Vant 是基于 375
    //     rootValue: 37.5,
    //     propList: ["*"]
    //   }
    // }
    plugins: [
      //自动添加css前缀
      require('autoprefixer')
      //转换rem  需 install postcss-plugin-px2rem
      require("postcss-plugin-px2rem")({'remUnit': 75,'baseDpr':2})
    ]
  }