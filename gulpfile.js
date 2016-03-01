"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

const gulpSass = require("gulp-sass");

const gulpPostCSS = require("gulp-postcss");
const syntaxSCSS = require("postcss-scss");

// Simple import plugin powered by PostCSS
const sassyImport = require("postcss-sassy-import");

const rebuild = () => {
	const plugins = [sassyImport()];

	return gulp.src("src/main.scss")
		.pipe(sourcemaps.init())
			.pipe(gulpPostCSS(plugins, { syntax: syntaxSCSS }))
			.pipe(gulpSass())
			.pipe(rename("bundle.css"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("out"));
};

gulp.task("default", () => {
	gulp.watch("src/**/*.scss", rebuild);

	return rebuild();
});