var nameVar = 'Ylva';
var nameVar = 'Tom';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Harry';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Ylva Turner';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
