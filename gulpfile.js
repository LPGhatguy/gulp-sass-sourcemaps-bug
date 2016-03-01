"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

const gulpSass = require("gulp-sass");

const gulpPostCSS = require("gulp-postcss");
const syntaxSCSS = require("postcss-scss");

const rebuild = () => {
	return gulp.src("src/main.scss")
		.pipe(sourcemaps.init())

			// Commenting out this next line makes the problem disappear
			.pipe(gulpPostCSS([], { syntax: syntaxSCSS }))

			.pipe(gulpSass())
			.pipe(rename("bundle.css"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("out"));
};

gulp.task("default", () => {
	gulp.watch("src/**/*.scss", rebuild);

	return rebuild();
});