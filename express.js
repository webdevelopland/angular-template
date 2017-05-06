var express = require("express");

var app = express();

// —————————————————————— Default Values ——————————————————————
var defaults = require( "./back-end/include/defaults" )();

// —————————————————————— Static Files ——————————————————————
require( "./back-end/include/static-files" )(express, app);

// —————————————————————— POST ——————————————————————
require( "./back-end/include/post" )(app);

// —————————————————————— GET ——————————————————————
require( "./back-end/include/get" )(app);

// —————————————————————— Lauch Server ——————————————————————
var server = app.listen( defaults.expressPort, () => {
  console.log("Express is started: " + defaults.expressPort);
});