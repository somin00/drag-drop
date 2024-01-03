const path = require("path");
//웹팩은 nodejs환경을 이용하기 때문에 nodejs 구문을 사용한다
module.exports = {
  mode: "development", //개발을 위한 빌드로 명시할 경우 최적화를 줄이고 디버깅을 편하게 함
  entry: "./src/app.ts", //첫 시작 파일
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js", //번들링 코드를 저장할 파일 이름
    path: path.resolve(__dirname, "dist"), //dist파일 절대경로 생성
    publicPath: "/dist/", //webpack-dev-server를 위한 추가 구성. 출력이 어디에 작성 되었는지 명시
  },
  devtool: "inline-source-map", //추출해야 하는 소스 맵이 생성될 것이라고 알림
  module: {
    //웹팩이 해야 할 일을 명시
    rules: [
      {
        test: /\.tsx?$/, //웹팩이 파일을 찾을 때마다 규칙이 적용되는 파일인지 확인하는 작업 수행
        use: "ts-loader", //찾은 파일을 타입스크립트 로더로 처리. tsconfig 파일에 설정한 구성을 가져와서 실행
        exclude: /node_modules/, //탐색에서 제외할 것
      },
    ],
  },
  resolve: {
    //찾아낸 import에 어떤 파일 확장자를 사용할지 전달. 기본값으로는 .js파일을 찾음
    extensions: [".ts", ".js"],
  },
};
