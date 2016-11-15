import buble from 'rollup-plugin-buble'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import resolve from 'rollup-plugin-node-resolve'

export default {
  dest: 'build/app.js',
  entry: 'src/index.js',
  format: 'iife',
  plugins: [
    globals(),
    buble(),
    cjs({
      exclude: [
        'node_modules/process-es6/**'
      ],
    }),
    resolve({
      browser: true,
      main: true
    })
  ],
  globals: {},
  external: [],
  sourceMap: false
}
