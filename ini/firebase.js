module.exports = ()=>{
  //console.log("process.env.PORTFOLIO_FIREBASE_FE_DATA: ",process.env.PORTFOLIO_FIREBASE_FE_DATA)
  //source ~/.profile
  global.FB_data = {
      frontEnd: (typeof process.env.PORTFOLIO_FIREBASE_FE_DATA === "string") ? JSON.parse(process.env.PORTFOLIO_FIREBASE_FE_DATA) : {
        apiKey:"",
        authDomain:"",
        databaseURL:"",
        projectId:"",
        storageBucket:"",
        messagingSenderId:""
      }
  }
  //console.log("global.FB_data.frontEnd: ",global.FB_data.frontEnd);
}
