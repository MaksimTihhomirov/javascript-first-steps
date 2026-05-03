const trafficlight = 'yellow';
if (trafficlight === 'green') {
    console.log('GO');
} else if (trafficlight === 'yellow') {
    console.log('Slow down');
} else if (trafficlight === 'red') {
    console.log('STOP');
} else {
    console.log('Traffic light is broken');
}

switch (trafficlight) {
    case'green':
    console.log('GO');
    break;
case 'yellow':
    console.log('Slow down');
    break;
case 'red':
    console.log('STOP');
    break;
    default:
        console.log('Traffic light is broken');
}

const grade = 82;
if (grade >= 80) {
console.log(' Letter Grade: A');
} else if (grade >= 70) {
console. log(' Letter Grade: B');
} else if (grade >= 60) {
console.log(' Letter Grade: C');
}  else if (grade >= 50) { 
    console. log(' Letter Grade: D');
} else {
console.log(' Letter Grade: F');
}

switch (grade) {
    case grade >= 80:
    console.log(' Letter Grade: A');
    break;
case 'yellow':
    console. log(' Letter Grade: B');
    break;
case 'red':
    console.log(' Letter Grade: C');
    break;
    default:
    console.log(' Letter Grade: F');
}

const animal = 'Cow';

switch (animal) {
    case 'Cow':
        console.log('I am a cow');
    case 'Giraffe':
        console.log('I am a giraffe');
    case 'Dog':
    case 'Pig':
        console.log('This animal is NOT extinct');
        break;
    case 'Dinosaur':
    case 'Dodo':
    default:
        console.log('This animal is extinct');
}