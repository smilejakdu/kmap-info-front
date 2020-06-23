const path = require("path"); // core nodejs 모듈 중 하나, 파일 경로 설정할 때 사용

module.exports = {
  entry: "/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
