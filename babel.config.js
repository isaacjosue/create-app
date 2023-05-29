module.exports = (api) => {
  api.cache(false)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ]

  const plugins = ['@babel/transform-unicode-sets-regex']

  return {
    plugins,
    presets,
  }
}
