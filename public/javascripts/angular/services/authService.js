const angularService_auth = (module)=>{
  module.factory("authenticationService", ()=>{
    var authObject = {};
    authObject.logInWithEmailAndPassword = (email, password)=>{
      return new Promise((accept, reject)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject(err);
        });
      });
    }
    authObject.createAccount = (email, password)=>{
      return new Promise((accept, reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject(err);
        });
      });
    }
    return authObject;
  });
  return module;
}
