var person = {
    name: 'Lee'
};

var copy = person;

console.log(copy === person);

copy.name = 'Kim';

person.address = 'Seoul';

console.log(person);
console.log(copy);