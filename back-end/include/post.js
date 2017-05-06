var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");
var mongojs = require("mongojs");
var js = require("libraryjs");
var Ajax = require( process.cwd() + "/back-end/require/ajax");
var defaults = require( process.cwd() + "/back-end/include/defaults" )();

module.exports = (app) => {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.post("/ajax", (req, res, next) => {
    if (!js.check([
      [req, "body", "ajax"],
      [res]
    ])) {
      next();
      return;
    }
    
    //create ajax handler
    var ajax = Ajax.create();
    ajax.set({
      req: req,
      res: res
    });

    mongodb(ajax);
  });

  app.post("*", (req, res, next) => {
    res.send("404");
  });

};

function mongodb(ajax) {
  //connect to mongodb
  var db = mongojs( defaults.mongoServer );
  ajax.set({ db: db });

  db.on("error", (err) => {
    //connection fail
    ajax.error("mongoDB is offline");
  });
  db.on("connect", (err) => {
    //connected!
    ajaxRouter(ajax);
  });
  db.collection("connect").find((err) => {}); //Little trick to make .on("connect") work
}

function ajaxRouter(ajax) {
  var routesPath = path.join( process.cwd(), "/back-end/include/ajax-routes", ajax.import.ajax + ".js" );

  fs.exists(routesPath, (exist) => {
    if (exist) {
      require( routesPath )(ajax);
    }
    else {
      ajax.error("wrong ajax");
    }
  });
}