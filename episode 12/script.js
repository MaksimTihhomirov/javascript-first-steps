const person = {
    firstName: 'Andre',
    'last-name': 'Madarang',
    age: 20,
    isCool: false,
    hobbies: ['video games', 'guitar'],
    address: {
        steet: '123 Address st.'
        city: 'Toronto',
        country: 'Canada',
    },
    howOldAmI: function() {
        console.log(`I am ${this.age} years old.`);
    }
};


// console.log(person.firstName);
// console.log(person['last-name]);

person.hairColor = 'black';

delete person.isCool;

person.howOldAmI();
// console.log(person)

const groupOfPeople = [
    {
        name: 'Andre'
        age: 20,
    },
    {
        name: 'Bob'
        age: 22,  
    },
    {
          name: 'Sara'
        age: 30,
    },
];

console.log(groupOfPeople);
