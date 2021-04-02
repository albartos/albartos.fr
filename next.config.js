module.exports = {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      config.module.rules.push({
        test: /\.yaml$/,
        type: 'json',
        use: 'yaml-loader',
      })
      return config
    }
  }
  