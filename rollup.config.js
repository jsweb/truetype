import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'truetype.esm.js',
  output: {
    format: 'umd',
    name: 'truetype',
    file: 'truetype.js',
    amd: {
      id: 'truetype'
    }
  },
  plugins: [buble(), uglify()]
}
