module.exports = () => {

  var defaults = {};
  defaults.expressPort = process.env.PORT || 4000;
  defaults.browserSyncPort = 7000;
  defaults.mongoDbLocalPort = 8000;
  defaults.mongoServer = `mongodb://127.0.0.1:${defaults.mongoDbLocalPort}/local`;
  // defaults.mongoServer = "mongodb://login:password@subid.mlab.com:id/dbname";

  return defaults;

};