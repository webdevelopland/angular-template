module.exports = (express, app) => {

  app.use("/node_modules", express.static("./node_modules"), function(req, re, next) {
    next();
  });
  app.use(express.static("./front-end"), function(req, res, next) {
    next();
  });

};