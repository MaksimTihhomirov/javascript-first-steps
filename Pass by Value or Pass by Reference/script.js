let a = 'hi';
let b = a;
b = b + ' there';

// Mental Model
// a: 'hi'
// b: 'hi there'

console.log(a);
console.log(b);

let c = [1,2];
let d = c;
d.push(3);

// Mental Model

console.log(c);
console.log(d);

let c2 = [1,2];
let d2 = c;
let e = [1,2];
// d.push(3);

// Mental Model
// c: 0x01
// d: 0x01
// e: 0x02

// Memory
// 0x01: [1,2]
// 0x02: [1,2]

console.log(c);
console.log(d);
console.log(c === e);

let num1 = 2;
let num2 = 3;

function add(param1, param2) {
    return param1 + param2;
}

// Mental Model
// num1: 2
// num2: 3

const result = add(num1, num2); // add(2,3)
console.log(result);

const myArray = ['a','b'];

function appendToarray(someArray) {
    someArray.push('c');
    return someArray;
}

// Mental Model
// myArray: 0x01
// someArray: 0x01

// Memory
// 0x01: ['a','b'];

const arrayResult = appendToarray(myArray);
console.log(myArray);
console.log(arrayResult);

const x = { name: 'Andre' };
const y = { name: 'Andre' };
const z = x;
z.name = 'Bob';

// Mental Model
// x: 0x05
// y: 0x06
// z: 0x05

console.log(x === y);
console.log(x);
console.log(y);
console.log(z);
