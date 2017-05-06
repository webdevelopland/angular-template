var js = require("libraryjs");

class Ajax {
  constructor() {
    var f = this;

    f.param = {};
    f.param.isDb = false;
    f.param.isRes = false;
    f.param.isReq = false;

    f.export = {};
    f.export.error = false;

    f.endEvents = new js.Events();
  }

  set(param) {
    var f = this;

    if (js.is(param.db)) f.setdb(param.db);
    if (js.is(param.res)) f.setres(param.res);
    if (js.is(param.req)) f.setreq(param.req);
  }

  setdb(db) {
    var f = this;

    f.db = db;
    f.isDb = true;
  }

  setreq(req) {
    var f = this;

    f.req = req;
    if ( js.is(f.req.body) ) f.import = f.req.body;
    f.isReq = true;
  }
  setres(res) {
    var f = this;

    f.res = res;
    f.isRes = true;
  }

  onend(event) {
    var f = this;

    f.endEvents.push(event);
  }

  error(msg, code) {
    var f = this;

    f.adderror(msg, code);
    f.end();
  }
  adderror(msg, code) {
    var f = this;

    console.log("[MongoDB ERROR]: " + msg);
    if (!f.export.error) {
      f.export.error = true;
      f.export.errors = [];
    }
    code = js.or(code, 0);
    f.export.errors.push({
      msg: msg,
      code: code
    });
  }

  success() {
    var f = this;
    f.end();
  }
  send(pkg) {
    var f = this;

    f.export = pkg;
    f.end();
  }
  reply(pkg) {
    var f = this;

    f.export.pkg = pkg;
    f.end();
  }
  end() {
    var f = this;

    if (!f.isRes) {
      console.log("[ERROR]: ajax response isn't set");
      return;
    }
    f.endEvents.call();
    f.res.send(f.export);
    if (f.isDb) f.db.close();
  }
}

function create() {
  return new Ajax();
}

module.exports = {
  body: Ajax,
  create: create
};