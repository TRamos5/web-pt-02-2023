// We are introducing ourselves again. Same setup but with ARRAYS
// Create 2 array variables. One with only strings and the other with only numbers.
// The string array will have our firstName, lastName, and programming language
// The number array will have the date
const firstArray = ['Travis', 'Ramos', 'JavaScript'];
const secondArray = [21];
// Create a function that introduces yourself BUT with ARRAYS : It should take 2 parameters: a string array and a number array
// add a new value to the string array using the square brackets, **remember what index to use
// add a new value to the number array using the square brackets **remember what index to use
// lets introduce ourself with console.log and template literals i.e. `I am an example of a template literal`
// ex. Hello! My name is stringArray[index] stringArray[index] < what index would the first and last name be?
// ex. The date is the numberArray[index] of currentMonth, numberArray[index]  < what index would the date, month and year be?
// ex. I am currently learning how to program in stringArray[index] < What index would the language be?
// change the value at the index the programming language is at to "HTML/CSS"
// Add a console.log to output programming language
// ex. And I'm learning stringArray[index]
// ex. I now know how to make a variables and functions
// exit out of the function
//Call the function
function introduction(ourFirstArray, ourSecondArray) {
    ourFirstArray.push('Lobsters');
    ourSecondArray.push(55);
    console.log(ourFirstArray);
    console.log(ourSecondArray);
    console.log(`Hello! My name is ${ourFirstArray[0] + ' ' + ourFirstArray[1]}.`);
    console.log(`The date is the ${ourSecondArray[0]} of the current month.`);
    console.log(`I am currently learning how to program in ${ourFirstArray[ourFirstArray.length - 1]}`);
    ourFirstArray[2] = 'HTML/CSS';
    console.log(`And I'm learning ${ourFirstArray[2]}.`);
}

introduction(firstArray, secondArray);

// What would be the length of the string array?
// console.log(firstArray.length);
// Create a function that re-introduces yourself with ARRAYS : using the push, pop, and join array methods
//create a string array with these values: "HTML", "CSS", "JavaScript", "React", "Bananas"

const stringArray = ["HTML", "CSS", "JavaScript", "React", "Bananas"];

function reIntroduction(stringArray) {
    const languages = stringArray.join(' ');
    console.log(languages);


    // .splice acts on the array and changes it
    // .slice returns a new array and doesn't change the one your slicing.
    const newArray = stringArray.slice(0, 3);


    console.log(stringArray);
    console.log(newArray);
}

reIntroduction(stringArray);
// use console.log to let everyone know what languages you are learning and JOIN all the items of the array into a string
// ex: I want to say that I am learning stringArray.
// You are not learning Bananas! POP that item out of the Array
// ex: Wait! I'm not learning bananas
// PUSH a new language, Node, into the stringArray
// ex: I am leaning this stringArray < convert the stringArray into a string
// exit out of the function
// call the re-introduce function
// In the reintroduceMyself function what would happen if we called the stringArray variable that we defined in the function block?