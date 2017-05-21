module.exports = (express, app) => {

  app.use("/node_modules", express.static("./node_modules"), (req, re, next) => {
    next();
  });
  app.use("/bower", express.static("./bower_components"), (req, re, next) => {
    next();
  });
  app.use(express.static("./front-end"), (req, res, next) => {
    next();
  });

};