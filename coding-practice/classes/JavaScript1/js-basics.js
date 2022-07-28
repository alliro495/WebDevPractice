console.log('Hello World');

//Variables:

let nickName = 'Alli';

//Variable naming rules and conventions:
//Cannot be reserved words
//Always you meaningful and descriptive names
//Cannot start with a number
//Cannont contain a space or hyphen, they should be camelCased
//they are case-sensitive

let firstName = 'Alexandra'; 
let lastName = 'Schmitt';

//Constants: Use if the variable will not need to be reassigned

//Primitive Variable Types

let name = 'Alli';//String literal
let age = 26; //Number literal  
let isApprove = false; //Boolean literal
let first = undefined;
let selectedColor = null;

//Objects

let person = {
    name: 'Alli',
    age: 26
}


person.name = 'Jane';//Dot notation
person['name'] = 'Mary';  //Bracket notation  
console.log(person);

//Arrays

let selectedColors = ['red', 'blue'];
selectedColors[2]= 'green';
selectedColors[3]= 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

//Functions:

function greet(name) {
    console.log('Hello,  '+name);
}

greet('John');
greet('Mary');

function square(number) {
    return number * number;
}

console.log(square(2));

let x=6;

//Operators

//Increment
console.log(++x); //increments before printing
console.log(x++); //increments after printing

//Decrement
console.log(--x); //decrements before printing
console.log(x--); //decrements after printing

x += 5; //same as x = x + 5;

//=== checks if equal value and type; Strict equality
console.log(1 === 1);
console.log('1' === 1);

//== only checks if values equal; Lose Equality
console.log(1 == 1);
console.log('1' == 1);

///////////////////////
// Ternary Operators //
///////////////////////

//if a customer has more than 100 points they are a gold
//customer, otherwise they are a silver customer

let points = 90;
let type = points > 100 ? 'gold' : 'silver'
//         (condition)  ? (if true) : (else)

console.log(type);

//Logical AND (&&)

let highIncome = true;
let goodCredit = true;

let eligible = highIncome && goodCredit; //both must be true for eligible to be true
console.log(eligible);

/////////////////////////////////////
//Logical OR (||) //either can be true for statement to be true
//Logical NOT (!) //negates statement

//Falsy
//undefined
//null
//0
//false
//''
//NaN : not a number

//not Falsy --> Truthy

/////////////////////////////////////
//Logical Operators with Non-booleans
/////////////////////////////////////

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; // basically, if a user did not pick a color, go to default

//Bitwise OR (|)
//Bitwise AND (&)

//Read 00000100
//Write 00000010
//Execute 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = readPermission | writePermission; //has both read and write permissions

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);

//////////////
// Exercise //
//////////////

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

///////////////
// If / Else //
///////////////

// if hour between 6AM and 12 PM: Good Morning
// if hour between 12 PM and 6 PM: Good Afternoon
// otherwise : Good Night

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good Morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else 
console.log('Good Night');

///////////////////
// Switch...case //
///////////////////

let role;

switch(role){
    case 'admin': 
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    case 'admin':
        console.log('Administrator User');
        break;

    default:
        console.log('Unknown User');
}

//////////////
// For...in //
//////////////

for (let key in person){
    console.log(key, person[key]);
}

//////////////
// For...of //
//////////////

const colors = ['red', 'green', 'blue'];

for (let color of colors){
    console.log(color);
}

//////////////
// Exercise //
//////////////

function maxNumber (x, y){
    return (x > y) ? x : y;
}

let number1 = maxNumber(1, 2);
let number2 = maxNumber(2, 2);
let number3 = maxNumber(2, 3);

console.log(number1);
console.log(number2);
console.log(number3);

//////////////
// Exercise //
//////////////

function isLandscape (width, height){
    return (width > height);
}

console.log(isLandscape(200, 800));

//////////////
// Exercise //
//////////////

function fizzBuzz (number){
    if (typeof number !== 'number') return 'Not a number';
    if ((number % 3 === 0) && (number % 5 === 0)) return 'Fizzbuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz'; 
    return number;
}

let x2 = 7;

console.log(fizzBuzz('4'));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

//////////////
// Exercise //
//////////////

function checkSpeed(speed){
    const speedLimit = 70;
    const miPerPoint = 5;

    if (speed < speedLimit+miPerPoint) {
        console.log('Ok');
        return;
    }
    const points = Math.floor((speed-speedLimit)/miPerPoint);
    if (points < 12) 
        console.log('Points', points);
    else 
        console.log('License Suspended');
    
}

checkSpeed(60);
checkSpeed(74);
checkSpeed(75);
checkSpeed(76);
checkSpeed(90);
checkSpeed(180);

//////////////
// Exercise //
//////////////

function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

showNumbers(10);

//////////////
// Exercise //
//////////////

