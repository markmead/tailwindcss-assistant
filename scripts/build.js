buildPlugin({
  entryPoints: ['builds/cdn.js'],
  outfile: 'dist/assistant.min.js',
})

buildPlugin({
  entryPoints: ['builds/module.js'],
  outfile: 'dist/assistant.esm.js',
  platform: 'neutral',
  mainFields: ['main', 'module'],
})

function buildPlugin(buildOptions) {
  return require('esbuild').buildSync({
    ...buildOptions,
    minify: true,
    bundle: true,
  })
}
