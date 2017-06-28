const gulp = require('gulp'),
	plg = require('gulp-load-plugins')(),
	server = require('gulp-live-server'),
	system = require('node-notifier'),
	rollup = require('rollup').rollup,
	bubble = require('rollup-plugin-buble'),
	uglify = require('rollup-plugin-uglify'),
	commonjs = require('rollup-plugin-commonjs'),
	resolve = require('rollup-plugin-node-resolve'),
	nib = require('nib'),
	axis = require('axis'),
	jeet = require('jeet'),
	rupture = require('rupture'),
	autoprefixer = require('autoprefixer-stylus'),
	locals = require('./package.json'),
	stylcfg = {
		compress: true,
		sourcemap: {
			comment: true,
			inline: true
		},
		use: [nib(), axis(), jeet(), rupture(), autoprefixer()]
	},
	bundle = (entry, dest, format, mod, map) => {
		return rollup({
			entry,
			plugins: [
				bubble(),
				uglify(),
				commonjs({
					include: 'node_modules/**'
				}),
				resolve({
					jsnext: true,
					main: true
				})
			]
		}).then(js => {
			js.write({
				dest,
				format,
				moduleId: mod,
				moduleName: mod,
				sourceMap: map
			})
			return system.notify({
				title: 'Gulp',
				message: 'Rollup compilado',
				sound: true
			})
		})
	}

gulp.task('deploy', ['imagemin', 'stylus', 'pug', 'web', 'data'])
gulp.task('default', ['deploy', 'cache', 'watch', 'server'])

//Image min
gulp.task('imagemin', done => {
	return gulp.src('web/img/*')
		.pipe(plg.cached('imagemin'))
		.pipe(plg.imagemin())
		.pipe(gulp.dest('public'))
		.pipe(plg.notify('Imagem otimizada para web'))
})

//Stylus
gulp.task('stylus', done => {
	return gulp.src('web/css/*.styl')
		.pipe(plg.cached('stylus'))
		.pipe(plg.sourcemaps.init())
		.pipe(plg.stylus(stylcfg))
		.pipe(plg.sourcemaps.write())
		.pipe(gulp.dest('public'))
		.pipe(plg.notify('Stylus processado'))
})

//HTML
gulp.task('pug', done => {
	return gulp.src('web/html/*.pug')
		.pipe(plg.pug({ locals }))
		.pipe(gulp.dest('public'))
		.pipe(plg.notify('Pug compilado'))
})

//Data
gulp.task('data', done => {
	return gulp.src('web/data/*').pipe(gulp.dest('public/data'))
})

//Rollup
gulp.task('lib', done => {
	return bundle('truetype.jsx', 'truetype.js', 'umd', 'truetype', false)
})
gulp.task('web', done => {
	return bundle('web/js/index.js', 'public/index.js', 'iife', 'index', 'inline')
})

//Cache
gulp.task('cache', done => {
	gulp.src('web/css/*.styl').pipe(plg.cached('stylus'))
	gulp.src('web/img/*').pipe(plg.cached('imagemin'))

	return system.notify({
		title: 'Gulp',
		message: 'Arquivos armazenados em cache',
		sound: true
	})
})

//Watch
gulp.task('watch', done => {
	gulp.watch('truetype.js', ['lib'])
	gulp.watch('web/js/index.js', ['web'])

	gulp.watch('web/css/*.styl', ['stylus'])
	gulp.watch(['web/html/*.pug', 'README.md'], ['pug'])
	gulp.watch('web/img/*', ['imagemin'])

	return system.notify({
		title: 'Gulp',
		message: 'Tarefas aguardando atualizações',
		sound: true
	})
})

//Live server
gulp.task('server', done => {
	let srv = server.static('/public', 8888)
	srv.start()
	gulp.watch('public/*', file => srv.notify(file))
})
