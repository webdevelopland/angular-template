module.exports = (app) => {

  app.get("*", function(req, res) {
    //var page = req.url;
    res.sendFile( process.cwd() + "/front-end/app/bootstrap/index.html" );
  });

};