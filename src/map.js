var _ = require('underscore');

var map = function(collection, iterator) {
  // map() is a useful primitive iteration function that works a lot
  // like each(), but in addition to running the operation on all
  // the members, it also maintains an array of results.

};

// should apply a function to every value in an array
var _doubled = _.map([1, 2, 3], function(num) {
  return num * 2;
});

var myDoubled = map([1, 2, 3], function(num) {
  return num * 2;
});

console.log(_doubled);
console.log(myDoubled);
console.log('these are the same:', _.isEqual(myDoubled, _doubled));
