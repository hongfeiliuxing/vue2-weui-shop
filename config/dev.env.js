var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // 替换NODE环境为开发环境
  NODE_ENV: '"development"'
})
