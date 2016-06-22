import buble from 'rollup-plugin-buble'

export default {
  moduleId: 'truetype',
  moduleName: 'truetype',
  entry: 'truetype.js',
  dest: 'truetype.umd.js',
  plugins: [ buble() ],
  format: 'umd'
}
