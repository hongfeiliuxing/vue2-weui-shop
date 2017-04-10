var utils = require('./utils');

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var result = utils.cssLoaders({
  sourceMap:false
})

// console.log(result)

// var tt = ExtractTextPlugin.extract({
//         use: [{
//           loader: 'css-loader',
//           options: {
//             minimize: process.env.NODE_ENV === 'production',
//             sourceMap: true
//           }
//         }],
//         fallback: 'vue-style-loader'
//       })

// console.log(tt)

console.log(utils.assetsPath('img/[name].[hash:7].[ext]'))
