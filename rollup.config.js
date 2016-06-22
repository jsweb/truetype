import buble from 'rollup-plugin-buble'

export default {
  moduleId: 'jstype',
  moduleName: 'jstype',
  entry: 'jstype.js',
  dest: 'jstype.mod.js',
  plugins: [ buble() ],
  format: 'umd'
}
