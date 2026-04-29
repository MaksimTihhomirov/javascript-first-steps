// function helloAgain(firstName) {
// console.log(`Function Declaration Hello ${firstName}`);
// }

// const hello = function(firstName) {
// console.log(`Hello ${firstName}`);
// }

// helloAgain('Andre');
// hello('Andre');

const hello = firstName => `Hello ${firstName}`;
console.log(hello('Andre'));

const add = (num1,num2) => num1 + num2;

console.log(add(4,3));

const person = {
    firstName: 'Andre',
    'last-Name': 'Madarang',
    age: 19,
    howoldAmI() {
        console.log(`I am ${this.age} years old`);
    }
}
 person.howoldAmI();

 // Callback function 

 const button = document.querySelector('button');

 const greeting = () => {
    console.log('Hello there!');
 }

 button.addEventListener('click', () => {
    console.log('Anon function called');
 })


 


// hello('Andre');