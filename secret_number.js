'use strict';
module.exports = function() {

  var secret_number = 0;
  secret_number = Math.floor((Math.random() * 1000000));

  function secretNumber(){
    return secret_number;
  }

return secretNumber;

};