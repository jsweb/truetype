import esbuild from 'esbuild'
import pack from './package.json' assert { type: 'json' }

const modify = new Date().toJSON().split('.')[0].replace('T', ' ')
const banner = `/**
 * @name ${pack.name}
 * @version ${pack.version}
 * @desc ${pack.description}
 * @author ${pack.author}
 * @create date 2016-06-26 03:21:18
 * @modify date ${modify}
 */`

esbuild
  .build({
    entryPoints: ['src/truetype.ts'],
    outdir: 'dist',
    format: 'esm',
    minify: true,
    banner: {
      js: banner,
    },
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
