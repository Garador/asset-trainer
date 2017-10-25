const angularService_validateInput = (module)=>{
  module.factory("validationService_input", ()=>{
    var validationObject = {};
    validationObject.validateEmail = (email)=>{
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    validationObject.validatePassword = (password)=>{
      if(password.length<30 && password.length>4){
        return true;
      }
      return false;
    }
    return validationObject;
  });
  return module;
}
