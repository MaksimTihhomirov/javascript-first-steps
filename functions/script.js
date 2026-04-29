// function declaration / function definition
function sayHello(firstName = 'John', lastName = 'Doe') {
    // function body
    console.log('Hello');
    console.log('firstName');
    console.log('lastName');
}

// function call / invoke / executing/ run 
sayHello('Andre', 'Madarang');
sayHello('Bob', 'Builder');
sayHello();

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
    console.log('something');
}

const result = add(2,3);
console.log(result);

function sayHelloAgain(firstName = 'John', lastName = 'Doe') {
    return `Hello, ${firstName} $(lastName)`;
}

// console.log(sayHelloAgain('Andre, 'Madarang'));

const person = {
    firstName: 'Andre',
    'last-Name': 'Madarang',
    age: 19,
    howOldAmI: function() {
        console.log(`I am ${this.age} years old`);
    }
};

person.howOldAmI();