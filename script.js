alert("Maksim");
console.log("JavaScript is working");

document.querySelector('p').style.color = 'red'; 

console.log("hello"); 
const firstName = 'Maksim';
const lastName = 'Tihhomirov';
const jobTitle = 'Web Developer';

// обычное соединение строк
const fullName = firstName + ' ' + lastName;
const about = 'Name: ' + fullName + ', Job: ' + jobTitle;

// template strings (правильный современный способ)
const fullName2 = `${firstName} ${lastName}`;
const about2 = `Name: ${fullName2}, Job: ${jobTitle}`;

console.log(about);
console.log(about2);