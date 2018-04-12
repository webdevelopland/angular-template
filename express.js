const express = require('express');
const path = require('path');
const fs = require('fs');

var app = express();

// ---------------------- Static Files ----------------------
app.use(
  '/node_modules',
  express.static('./node_modules'),
  (req, res, next) => {
    next();
  }
);

app.use(express.static('./dist'), (req, res, next) => {
  next();
});

// ---------------------- GET ----------------------
app.get("*", (req, res) => {

  const indexPath = path.join(
    process.cwd(), 'dist/index.html'
  );

  fs.exists(indexPath, (exists) => {
    if (exists) {
      res.sendFile(indexPath);
    } else {
      res.send("404");
    }
  });

});

// ---------------------- Lauch Server ----------------------
const port = 4000;
var server = app.listen(port, () => {
  console.log('Express is started: ' + port);
});
