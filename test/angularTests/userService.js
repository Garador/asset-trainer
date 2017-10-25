var assert = require('assert');
require('./test-helper.js');

// Loads the module we want to test
require('../../public/javascripts/angular/services/userService');

describe('User service', function() {
  beforeEach(global.ngModule('myServices.user'));

  it('should return a list of users', inject(function(UserService) {
    assert.equal(UserService.getUsers().length, 0);
  }));
});
