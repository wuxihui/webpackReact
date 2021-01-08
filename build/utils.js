//utils.js是webpack配置用的工具方法
const path = require("path")

exports.resolve = function (dir) {
    return path.resolve(__dirname, dir)
}