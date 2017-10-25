module.exports = ()=>{
  //source ~/.profile
  var mongoose = require('mongoose');
  var connectData = (typeof process.env.PORTFOLIO_MONGODB_DATA === "string") ? JSON.parse(process.env.PORTFOLIO_MONGODB_DATA) : require("../keys/MongoLab.json");
  var connectString = [
    connectData.prefix
    ,connectData.Username
    ,":"
    ,connectData.Password
    ,"@"
    ,connectData.Host
    ,"/"
    ,connectData.Database
  ].join("");
  mongoose.connect(connectString, { useMongoClient: true });
  mongoose.Promise = global.Promise;
  global.mongoose = mongoose;
}
