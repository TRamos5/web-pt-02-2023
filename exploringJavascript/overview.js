// This is a single line comment : This will be ignored by JavaScript, i.e. it will not be executed 
// Create 4 string variables : a firstName, a lastName, currentDate (ex: 10/28/2021 date would be 28), and programming language
const firstName = 'Travis';
const lastName = 'Ramos';
const currentDate = '28';
let programmingLanguage = 'JavaScript';
// Create a function that introduces yourself: It should take 2 parameters: a first name and a last name
// inside the function block create 2 variables, 1 string and another number: current month and current year
// lets introduce ourself with console.log and template literals i.e. `I am an example of a template literal`
// ex. Hello! My name is firstName lastName < pass in your parameters
// ex. The date is the currentDate of currentMonth, currentYear
// ex. I am currently learning how to program in programming language
// ex. Change the value of the programming language variable
// Add a console.log to output programming language 
// ex. And I'm learning language
// ex. I now know how to make a variables and functions
// exit out of the function
// console.log a global scoped variable i.e. a variable not defined in a code block
// console.log a local scoped variable defined in the function block

function introduction(firstName, lastName) {
    const currentMonth = 'February';
    const currentYear = 2023;

    console.log(currentYear);

    console.log(`Hello my name is ${firstName} ${lastName}.`);
    console.log(`I am currenlty leanring how to program in ${programmingLanguage}.`);
    programmingLanguage = 'C++';
    console.log(`We changed the programming language to ${programmingLanguage}.`);
}

introduction(firstName, lastName);

console.log(currentDate);