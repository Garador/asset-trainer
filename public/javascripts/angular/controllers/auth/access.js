//Log In Module.
var angularM1 = angular.module('loginApp', []);
angularM1 = angularService_auth(angularM1);
angularM1 = angularService_validateInput(angularM1);
angularM1.controller('loginController',
['$scope', "authenticationService", "validationService_input",
function ($scope, authenticationService, validationService_input) {
  $scope.greetMe = 'World';
  $scope.logIn = ()=>{
    if(validationService_input.validateEmail($scope.loginEmail)
    && validationService_input.validatePassword($scope.loginPassword)){
      authenticationService.logInWithEmailAndPassword($scope.loginEmail, $scope.loginPassword)
      .then((data)=>{
        console.log("Data: \n",data);
      })
      .catch((err)=>{
        console.log("Error: \n",err);
      });
    }else{
      window.alert("Incorrect username or password.");
    }
  }
}]);
angular.bootstrap($('#loginApp'),['loginApp']);

//Create Module.
var angularM2 = angular.module("createApp", []);
angularM2 = angularService_auth(angularM2);
angularM2 = angularService_validateInput(angularM2);

angularM2
.controller("createMyAccount"
,['$scope',"authenticationService"
,"validationService_input", ($scope
  ,authenticationService, validationService_input
)=>{
  $scope.greetMe = "Create World.";
  $scope.createAccount = (email, pass, pass2)=>{
    if(validationService_input.validateEmail(email)
    && validationService_input.validatePassword(pass)
    && pass === pass2){
      console.log("Creating account...");
      authenticationService.createAccount(email, pass)
      .then((data)=>{
        console.log("Account created: \n",data);
      })
      .catch((err)=>{
        console.log("Error creating account: \n",err);
      });
    }else{
      window.alert("The data is not valid. Please check again.");
      console.log("Email: ",email);
      console.log("Password: ",pass);
      console.log("Password 2: ",pass2);
    }
  }
}]);
angular.bootstrap($('#createApp'),['createApp']);
