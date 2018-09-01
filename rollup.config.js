import babel from 'rollup-plugin-babel'

const author = `/**
 * @author Alex Bruno Cáceres
 * @email git.alexbr@outlook.com
 * @date 2016-06-21 01:16:15
 * @desc Simple JS module to generate random id/key/hash in various formats, including UUID
 */`

export default [{
  input: 'src/truetype.js',
  plugins: [babel()],
  output: {
    format: 'umd',
    name: 'truetype',
    file: 'dist/truetype.js',
    banner: author
  }
}, {
  input: 'src/test.js',
  external: ['assert', './truetype'],
  output: {
    format: 'cjs',
    name: 'test',
    file: 'dist/test.js'
  }
}]
