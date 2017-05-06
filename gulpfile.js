var path = require("path");
var fs = require("fs");
var gulp = require("gulp");
var gulpsync = require("gulp-sync")(gulp);
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var typescript = require("gulp-typescript");
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var tsconfig = require("./tsconfig.json");
var browserSync = require("browser-sync");
var js = require("libraryjs");
var defaults = require( "./back-end/include/defaults" )();

gulp.task("default", ["reboot"]);

// —————————————————————— Paths ——————————————————————
const appPath = path.join( process.cwd(), "/front-end/app" );
const distPath = path.join( appPath, "/dist" );
const distLess = path.join( distPath, "css" );

// —————————————————————— Groups ——————————————————————
//compile
gulp.task("compile", gulpsync.sync([ "clean", "typescript", "less" ]));

//static: just compile and launch
gulp.task("static", gulpsync.sync([ "compile", "express" ]));

//auto: auto compiling and browser refreshing
gulp.task("auto", gulpsync.sync([ "static", "watch", "browserSync" ]));

//—————————————————————— Delete compiled files ——————————————————————
gulp.task("clean", () => {
  return gulp.src( distPath )
    .pipe(clean())
  ;
});

// —————————————————————— Compile ——————————————————————
var compileTypescript = (src) => {
  return gulp.src(src)
    .pipe(typescript(tsconfig.compilerOptions))
    .pipe(gulp.dest( (file) => {
      return path.join( appPath, path.relative( appPath, distPath ), path.relative( appPath, file.base ) );
    }))
  ;
};
var compileLess = (src) => {
  return gulp.src( src )
    .pipe(concat("app.less"))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest( distLess ))
  ;
};

gulp.task("typescript", () => {
  return compileTypescript( path.join( appPath, "/**/*.ts" ) );
});

gulp.task("less", () => {
  return compileLess( path.join( appPath, "/**/*.less") );
});

// —————————————————————— Start express ——————————————————————
gulp.task("express", () => {
  require( "./express" )();
});

// —————————————————————— Watching files updates ——————————————————————
gulp.task("watch", () => {
  gulp.watch(path.join( appPath, "/**/*.ts")).on('change', (event) => {
    if (event.type === "changed") {
      gulp.start("typescript");
    }
    else {
      compileTypescript(event.path, tsDist)
    }
  });

  gulp.watch(path.join( appPath, "/**/*.less"), ["less"]);
});

// —————————————————————— Auto browser refresh ——————————————————————
gulp.task("browserSync", () => {
  browserSync.init(null, {
    proxy: "http://localhost:" + defaults.expressPort,
    files: ["front-end/app/**/*.js", "front-end/app/**/*.html", "front-end/app/**/*.css"],
    browser: "google chrome",
    open: false,
    port: defaults.browserSyncPort,
  });
});