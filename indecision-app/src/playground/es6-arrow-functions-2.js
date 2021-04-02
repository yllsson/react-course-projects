// arguments object - no longer bound

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

// this keywork - no longer bound

const user = {
  name: 'Ylva',
  cities: ['Helsingborg', 'Jonkoping', 'Edinburgh'],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  },
};

console.log(user.printPlacesLived());

// challenge area

const multiplier = {
  nums: [2, 6, 3, 4, 9],
  multiplyBy: 3,
  multiply() {
    return this.nums.map((num) => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
