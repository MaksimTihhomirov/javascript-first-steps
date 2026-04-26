const people = ['Andre', 'Bob', 'Jennifer', 'Mary'];
const numbers = [1,2,6,3,5];
const mixed = ['A string', 35, true, {a:1},null,
underfined, [1,2,3]];

// console.log(people[2]);
// console.log(people.length);
// people.push('Chris');
// console.log(people);
// const chris = people.pop();
// console.log(people);
// console.log(chris);

numbers[2] = 36;
// numbers = [1,2,3];
console.log(numbers);

// people.unshift('Nancy);
// console.log(people);

// people.shift();
// console.log(people);

console.log(people.includes('Harry'));
console.log(people.indexOf('Harry'));
console.log(people.reverse());

const joinedArray = people.concat(numbers);
console.log(joinedArray);
