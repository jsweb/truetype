import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/truetype.js',
  output: {
    format: 'umd',
    name: 'truetype',
    file: 'dist/truetype.js',
    amd: {
      id: 'truetype'
    }
  },
  plugins: [buble(), uglify()]
}
