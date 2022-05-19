let myName = "Albertas";
console.log(myName);

let msg = `Hello, ${myName}, wellcome to JavaScript!`;
console.log(msg);

let boys = 6;
let girls = 9;
let msg2 = `There are ${boys + girls} students in the classroom.`;
console.log(msg2);

let randomNumber = Math.floor(Math.random() *10) + 1;
console.log(randomNumber);

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let msg3 = `You've rolled ${dice1} and ${dice2}. It's ${dice1 + dice2} in total.`;
console.log(msg3);

let firstName = "destroyer3000";
let modFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
console.log(modFirstName);