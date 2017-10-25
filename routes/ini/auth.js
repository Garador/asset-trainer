var router = require('express').Router();

module.exports = (app)=>{
  router.get('/', function(req, res, next) {
    res.render('auth/access', { title: 'Express' , FB_INI_data:global.FB_data.frontEnd});
  });

  app.use(router);
  return app;
}
