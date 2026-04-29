const age = 15;
const drinkingAge = 19;

if (age >= drinkingAge) {
    console.log('I can drink beer!!');
} else {
    console.log('I cannot drink alcohol yet.');
}

const passwordTypedIn = 'password';
const actualPassword = 'password';

if (passwordTypedIn === actualPassword) {
    console.log('Correct password, logging you in.');
} else {
    console.log('Password incorrect. Please try again');
}

const month = 'September';
const day = 31;

if (month === 'October' && day === 31) {
  console.log('It is Halloween');
} else {
    console.log('It is NOT Halloween');
}

// > 80 = A 
// 70 - 80 = B
// 60 - 70 = C
// 50 - 60 = D 
// < 50 = F

const grade = 82;
if (grade >= 80) {
    console.log('Letter Grade: A');
} else if (grade >= 70) {
     console.log('Letter Grade: B');
} else if (grade >= 60) {
     console.log('Letter Grade: C');
} else if (grade >= 50) {
     console.log('Letter Grade: D');  
} else {
    console.log('Letter Grade: F');
}

// Ternary

// if (age >= drinkAge) {
// console.log('I can drink beer!!');
// } else {
//  console.log('I cannot drink alcohol yet.');
// }

age >= drinkingAge ? console.log('I can drink beer!!') : console.log 
('I cannot drink alcohol yet.');

let canIDriknkMessage;

// // if (age >= drinkingAge) {
// //    canIDrinkMessage = 'I can drink beer!!';
// // } else {
// //   canIDrinkMessage = 'I cannot drink alcohol yet.';
// // }

// let canIDrinkMessage = age >= drinkingAge
// ? 'I can drink beer!!'
// : 'I cannot drink alcohol yet.';

console.log(age >= drinkingAge
    ? 'I can drink ber!!'
: 'I cannot drink alcohol yet.');