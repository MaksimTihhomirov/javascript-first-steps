// for (let i = 0; i < 10; i++) {
// console.log(`i is ${i}`);
// }

// const people = ['Andre ', 'Bob', 'Sally'];

// for (let i = 0; i < people.length; i++) {
// console.log(people[i]);
// }

// Break and Continue

// for (let i = 0; i < 10; i++) {
//    if (i === 4) {
//        // break;
//        continue;
// } 

// console.log(`i is ${i}`);
// }

// While loops
// let j = 0;
// while (j < 10) {
//    console.log(`j is ${j}`);
//    // j = j + 2;
// }

// do while loop 
// let k = 100;

// do {
// console.log(`k is ${k}`);
// k++;
// } while (k < 10)

// for in loops

// const people = {
// firstName: 'Andre',
// lastName: 'Madarang',
// job: 'Web Developer',
// };

// for (const x in people) {
//     console.log(people[x]);
// }

// for of loops

const people = ['Andre ', 'Bob', 'Sally'];

// for (const x in people) {
//     console.log(people[x]);
// }

// foreach
// people.forEach(people, index) => {
// console.log(`Index ${index}: ${people}`);
// });

// map
const peopleMap = people.map((people,index) => {
    return `${index}: ${people}`;
});

console.log(peopleMap);