console.log ("Hello World");

// A function that generates a random number
let randomNumber = Math.random();

console.log(randomNumber);

//if (randomNumber < 0.5) {
//If our random number is less than .5, the condition will generate "Hello Mellya"
//    console.log("Hello Mellya");

//If our condition meets, a random number will generate in the console
//    console.log(randomNumberm);
//}

//Relational operators inside conditional if statements
//if (randomNumber >= 0.5) {

//If our random number is less greater than or equal to .5 , the conditon will generate "randomNumber is greater than 0.5"
//    console.log("randomNumber is greater than 0.5");

// if our condition meets, a randomNumber will generate
//    console.log(randomNumber);
//}

//////////////////////////////////////////////////////////////////////
//if else statement 

//Relational operators inside conditional if statements
//const dayOfWeek = 'Monday';

//If our condition is the day of the week equals Monday
//if (dayOfWeek === 'Monday') {

//If our condition is met, the message "This is Monday" will generate in the console
//    console.log('This is Monday');

//We produced a new block condition that will run if the first block condition is not met.
//} else if (dayOfWeek === 'Thursday') {

//If this condition is met the message "This is Thursday" will be generated
 //   console.log("This is Thursday");

 //We produced a new block condition that will run if the first & second block conditions are not met.
//} else if (dayOfWeek ===  'Saturday') {

//If this condition is met the message "Hooray, today is Saturday" will be generated
//    console.log("Hooray, today is Saturday");
//}



//const age = prompt('Enter An Age To Drive')

//if (age < 5) {
//    console.log("You are less than 5! Hop off");

//} else if (age < 10) {
//    console.log("I'm gon need you to bounce");

//} else if (age >= 16) {

//   console.log("Let me drive the boat!");
//}
// ELSE --  All conditions in the logic have failed
//else {

//console.log("Last Resort If All Conditions Fail");
//}

//Case Statements
// const expr = 'Papayas';

// switch (age) {

//     case 'Oranges':
//         console.log("Oranges are $0.59 a pound");
//         break;    
//     case 'Mangoes':
//         console.log("Hello Mangos!");
//         break;
//     case 'Papayas':
//         console.log("Hello Papayas");
//         break;
//     default:
//         console.log("Sorry, we are out of your asked item.");

// }

//const password = prompt("Please Enter A New Password");

//if (password.length >= 6) {

    //Nested Condition
//    if (password.indexOf(' ') === -1) {

//        console.log("Valid Password")
//    }else {
//        console.log("Password Can't Have Spaces")
//    }

//} else {

//    console.log("Password is Too Short")
//}


//function singSong() {
//    console.log("DO");
//    console.log("RE");
//    console.log("MI");
//}

//ingSong()
//singSong()
//singSong()

//String Literal
function greet(FirstName) {
    
    console.log(`Hey There, ${FirstName}`)
}

greet('Mellya')

function greet1(FirstName, lastName) {

    console.log(`Hey There, ${FirstName} ${lastName}`)
}

greet1('Jimny', 'Cricket')