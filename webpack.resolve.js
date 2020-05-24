module.exports = {
  resolve: {

    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],

    extensions: ['.js', '.jsx', '.json'],

    alias: {
      '@': path.resolve(__dirname, './src'),
    },

  },
}
