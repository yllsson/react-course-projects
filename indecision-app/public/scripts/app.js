'use strict';

// arguments object - no longer bound

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

// this keywork - no longer bound

var user = {
  name: 'Ylva',
  cities: ['Helsingborg', 'Jonkoping', 'Edinburgh'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

// challenge area

var multiplier = {
  nums: [2, 6, 3, 4, 9],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.nums.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
