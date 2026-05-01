const trafficLight = 'yellow';

if (trafficLight === 'green') {
    console.log('GO');
} else if (trafficLight === "yellow") {
    console.log('Slow down');
} else if (trafficLight === "red") {
    console.log('STOP');
} else {
    console.log('Traffic light is broken');
}

switch (trafficLight) {
    case 'green':
        console.log('GO');
        break;
        case 'yellow':
            console.log('Slow down');
            break;
            case'red':
            console.log('STOP');
            break;
}

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


switch (true) {
    case grade >= 80:
        console.log('Letter Grade: A');
        break;
        case grade >= 70:
            console.log('Letter Grade B');
             break;
        case grade >= 60:
            console.log('Letter Grade C');
             break;
        case grade >= 50:
            console.log('Letter Grade D');
            break;
        default:
            console.log('Letter Grade F');
    }

    const animal = 'Cow';

    switch (animal) {
        case 'Cow':
            console.log('I am a cow');
        case 'Giraffe':
            console.log('I am a giraffe');
        case 'Dog':
        case 'Pig':
            console.log('This animal is NOT extinic');
            break;
        case 'Dinosaur':
        case 'Dodo':
        default:
            console.log('This animal is extinct');
    }