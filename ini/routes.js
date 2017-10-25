module.exports = (app)=>{
  var requires = [
    require("../routes/ini/auth.js")
  ]
  for(let index in requires){
    app = requires[index](app);
  }
  return app;
}
