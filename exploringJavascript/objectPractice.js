// Create an object variable that has our firstName, lastName, programming language, current date, and a random key/value pair
const myObject = {
    firstName: 'Travis',
    lastName: 'Ramos',
    programmingLanguage: 'JavaScript',
    currentDate: 21
}
// Create an string variable that's value is "firstName"
const myFirstName = myObject.firstName;
// Create a function that introduces yourself BUT with an Object!
const firstNameValue = myObject['firstName']; 

function introduction() {
 console.log(`Hello my first name is ${myObject.firstName}`);

 console.log(myObject);
 myObject.currentMonth = 'October'; // dot notation
 myObject["currentYear"] = 2021; // bracket notation
 console.log(myObject);

 myObject.currentYear = 2022;
 delete myObject.currentMonth
 console.log(myObject);
}

introduction();
// Create a new key/value pair that has key of currentMonth and string value of October using dot notation
// Create a new key/value pair that has key of currentYear and number value of 2021 using bracket notation
// lets introduce yourself with console.log and template literals i.e. `I am an example of a template literal`
// ex. Hello! My name is obj.key obj.key < what keys should you be use to get your first and last name be?
// ex. The date is the obj[key] of currentMonth, obj[key]  < what key would you use to get the date? the month? year?
// ex. I am currently learning how to program in obj.key < What key would you use to get the programming language?
// change the value for programming language
// Add a console.log to output language
// ex. And I'm learning stringArray[index]
// ex. I now know how to make a variables and functions
// delete the random key/value pair
// exit the function
// call the function
// What is the value of currentMonth key?
// Using obj variable created at the begin, bracket notation and the string variable with a value of "firstName" you made at the begin of the script what would the output be if we combined them?
// What would be the output of the random key/value pair that we deleted inside of the function?