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

//PROMPT CONDITION, multiple conditionals --test out variable in operators
//const age = prompt('Enter An Age To Drive')

//If condition is met the message, "You are less than 5! Hop off" will generate
//if (age < 5) {
//    console.log("You are less than 5! Hop off");

//If condition is met the message, "I'm gon need you to bounce" will generate
//} else if (age < 10) {
//    console.log("I'm gon need you to bounce");

//If condition is met the message, "Let me drive the boat!" will generate
//} else if (age >= 16) {
//   console.log("Let me drive the boat!");
//}

//final condition that will run if everything else failed
// ELSE --  All conditions in the logic have failed
//else {

//console.log("Last Resort If All Conditions Fail");
//}



//Case/switch Statements, we named our expression "Papayas"
// const expr = 'Papayas';

//Created the switch statement and passed in our expression
// switch (expr) {

//Here is the start of the individual switch statements --similar to if else
//     case 'Oranges':
//         console.log("Oranges are $0.59 a pound");
//break function is used to only run the case staement once --Breaking the excusion of the code
//         break;    
//     case 'Mangoes':
//         console.log("Hello Mangos!");
//         break;
//     case 'Papayas':
//         console.log("Hello Papayas");
//         break;

//If we dont have any of the cases in this switch statement that match the perameter this default statement will run
//     default:
//         console.log("Sorry, we are out of your asked item.");
// }


//case/switch statement displaying nested conditions through checking the password length
//const password = prompt("Please Enter A New Password");

//if (password.length >= 6) {

//Nested if condition assuring there is no spacing
//    if (password.indexOf(' ') === -1) {

//if the password meets the condition and doesnt have a space the message "Valid Password" will generate
//        console.log("Valid Password")

//if there's spaces this message will be generated
//    }else {
//        console.log("Password Can't Have Spaces")
//    }

//} else {

//if the condition doesnt meet the character minimum this message will be generated
//    console.log("Password is Too Short")
//}

//Declared the function
//function singSong() {
//    console.log("DO");
//    console.log("RE");
//    console.log("MI");
//}

//We called the function in js 3 times 
//singSong()
//singSong()
//singSong()

//we declared the function, named it greet and placed firstname in the argument parameter
function greet(FirstName) {
//template literal. We're placing the placeholder for the argument being passed into the console log stream
    console.log(`Hey There, ${FirstName}`)
}
//called the function and passed the string 
greet('Mellya')

//we declared the function, named it greet1 and placed multiple arguments in the argument parameter
function greet1(FirstName, lastName) {
//We're placing the placeholder for the argument being passed into the console log stream  
    console.log(`Hey There, ${FirstName} ${lastName}`)
}
//called the function and passsed the string
greet1('Jimny', 'Cricket')