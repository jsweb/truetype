import pack from './package.json'

const modify = new Date().toJSON().split('.')[0].replace('T', ' ')
const banner = `/**
 * @name ${pack.name}
 * @version ${pack.version}
 * @desc ${pack.description}
 * @author ${pack.author}
 * @create date 2016-06-26 03:21:18
 * @modify date ${modify}
 */`

export default {
  input: 'src/index.js',
  output: {
    banner,
    format: 'esm',
    file: 'index.js',
  },
}
