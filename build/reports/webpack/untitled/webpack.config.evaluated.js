{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: [
    '/home/daz/IdeaProjects/untitled/build/js/packages/untitled/kotlin/untitled.js'
  ],
  output: {
    path: '/home/daz/IdeaProjects/untitled/build/distributions',
    filename: 'untitled.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    port: 8080,
    contentBase: [
      '/home/daz/IdeaProjects/untitled/build/processedResources/Js/main'
    ]
  }
}