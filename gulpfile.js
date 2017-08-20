'use strict';

const gulp = require('gulp');
const ava = require('gulp-ava');
const xo = require('gulp-xo');

gulp.task('lint', () => {
	return gulp.src([
		'index.js',
		'gulpfile.js',
		'lib/*.js',
		'test/*.unit.js'
	]).pipe(xo({quiet: true}));
});

gulp.task('test', () => {
	return gulp.src([
		'test/*.unit.js'
	]).pipe(ava({verbose: true}));
});
