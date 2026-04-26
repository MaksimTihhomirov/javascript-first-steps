/* Variables */
const num1 = 4;
const num2 = 2;
const num3 = 4.5;
const num4 = -4.5;
const myvar ='A string';
const myvar2 ='Another string';

/* Basic Math
Print our results
*/
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Floating point inaccuracy
console.log(0.1 + 0.2);
console.log(0.2 + 0.4);

console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

// NaN
console.log(num1 * 'A string');

// Infinity
console.log(9_000_000 ** 9_000_000);
console.log(Number.NEGATIVE_INFINITY);

// Math Object
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.round(6.6));
console.log(Math.round(6.3));
console.log(Math.ceil(6.3));
console.log(Math.floor(6.7));

// Converting
console.log(myVar + myVar2);
console.log(myVar + num1);

// String to number
console.log(parseInt("2") + 2);

// Number to string
console.log(2 + '');
console.log(`${2}`);

// Bigint - INtroduced ES2020
let maxint = Bigint(Number.MAX_SAFE_INTEGER);
console.log(maxint);
maxInt++ ;
console.log(maxInt);

let bigNumber = 9007199254740993n;
bigNumber = bigNumber * 4n;
console.log(bigNumber);
