var path = require("path");
var fs = require("fs");
var gulp = require("gulp");
var gulpsync = require("gulp-sync")(gulp);
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var typescript = require("gulp-typescript");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var tsconfig = require("./tsconfig.json");
var browserSync = require("browser-sync");
var js = require("libraryjs");
var fcrypt = require("fcrypt");
var defaults = require( "./back-end/core/defaults" )();

gulp.task("default", ["compile"]);

// —————————————————————— Paths ——————————————————————
const appPath = path.join( process.cwd(), "/front-end/app" );
const distPath = path.join( appPath, "/dist" );
const distCss = path.join( distPath, "css" );

// —————————————————————— Groups ——————————————————————
//compile
gulp.task("compile", gulpsync.sync([ "clean", "typescript", "sass" ]));

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
var compileSass = (src) => {
  return gulp.src( src )
    .pipe(concat("app.scss"))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest( distCss ))
  ;
};

gulp.task("typescript", () => {
  return compileTypescript( path.join( appPath, "/**/*.ts" ) );
});

gulp.task("sass", () => {
  return compileSass([
    path.join( process.cwd(), "/node_modules/@angular/material/_theming.scss" ), //Angular Material Themes Builder
    path.join( appPath, "/**/sass/default/*.scss" ), // Global variables
    path.join( appPath, "/**/*.scss" ) // Styles
  ]);
});

// —————————————————————— Start express ——————————————————————
gulp.task("express", () => {
  require( "./express" );
});

// —————————————————————— Watching files updates ——————————————————————
gulp.task("watch", () => {
  gulp.watch(path.join( appPath, "/**/*.ts"), ["typescript"]);
  gulp.watch(path.join( appPath, "/**/*.scss"), ["sass"]);
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

// —————————————————————— Encryption ——————————————————————
gulp.task("encrypt", () => {
  var loading = new js.Async();
  process.stdout.write("password: ");
  read( (password) => {
    fcrypt.encrypt({
      key: password,
      input: "./back-end/private",
      output: "./back-end/private.data",
      callback: (errors) => {
        if (errors.exists) errors.console();
        else console.log("encrypted");
        loading.set("true");
      }
    });
  });
  return loading;
});

gulp.task("decrypt", () => {
  var loading = new js.Async();
  process.stdout.write("password: ");
  read( (password) => {
    fcrypt.decrypt({
      key: password,
      input: "./back-end/private.data",
      output: "./back-end/private",
      callback: (errors) => {
        if (errors.exists) errors.console();
        else console.log("decrypted");
        loading.set("true");
      }
    });
  });
  return loading;
});

function read(callback) {
  process.stdin.setEncoding("utf8");

  process.stdin.on("readable", () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      callback(chunk);
      process.stdin.end();
    }
  });

  process.stdin.on("end", () => {
    callback(null);
  });
}