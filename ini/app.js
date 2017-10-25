module.exports = (app)=>{
  require("./i18n.js");
  require("./firebase.js")();
  require("./mongo.js")();
  var routes = require("./routes.js");
  i18n = require("i18n");
  app.use(i18n.init);
  app.use(function(req, res, next) {
    res.locals.__ = res.__ = function() {
        return i18n.__.apply(req, arguments);
    };
    next();
  });
  app = routes(app);
  return app;
};
