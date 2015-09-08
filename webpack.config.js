
// 使用webpack打包
module.exports = {
  entry: {
	 "main": "./src/main.js",
	 "index": "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js"
  }
};