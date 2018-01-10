let AWS = require('aws-sdk');
exports.handler = function(event, context, callback){


var x = 2;
var y = 3;
var z;

z= x*y;

console.log(z);
callback(null,z);

}