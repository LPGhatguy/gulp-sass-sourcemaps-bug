"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");

const gulpSass = require("gulp-sass");

const rebuild = () => {
	return gulp.src("src/main.scss")
		.pipe(sourcemaps.init())
			.pipe(gulpSass())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("out"));
};

gulp.task("default", () => {
	gulp.watch("src/**/*.scss", rebuild);

	return rebuild();
});