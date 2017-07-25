const path = require("path");
const fs = require("fs");
const gulp = require("gulp");
const js = require("libraryjs");
const fcrypt = require("fcrypt");

gulp.task("default", ["encrypt"]);

// —————————————————————— Encryption ——————————————————————
const privateData =     "./back-end/private.data";
const privateFolder =   "./back-end/private";

gulp.task("encrypt", () => {
  var loading = new js.Async();
  process.stdout.write("password: ");
  read( (password) => {
    fcrypt.encrypt({
      key: password,
      input: privateFolder,
      output: privateData,
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
      input: privateData,
      output: privateFolder,
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