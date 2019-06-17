// vue.config.js

module.exports = {
  chainWebpack: config => {
    config
    .plugin('define')
      .tap(args => {
        let v = JSON.stringify(require('./package.json').version)
        args[0]['process.env']['VUE_APP_VERSION'] = v
        return args
      })
  }
}