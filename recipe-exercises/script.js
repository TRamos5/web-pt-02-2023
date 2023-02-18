// Step 1: Write out a function definition called marinaraSauce(). Be sure to be mindful of your syntax!
// function marinaraSauce() {

// }
// Step 2: Inside this function, write a series of console.log(); statements that will print the following marinara sauce recipe:
/*
- Heat a medium-large saucepan over medium heat.

- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes

- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.

- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes

- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.
*/
// function marinaraSauce() {
//     console.log("Heat a medium-large saucepan over medium heat.");
//     console.log();
//     console.log("Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
//     console.log();
//     console.log("Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
//     console.log();
//     console.log("Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
//     console.log();
//     console.log("Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
// }
// Step 3: Call the marinaraSouce() function
// marinaraSauce();


// **Using Parameters**

// Step 1: In your function definition, change marinaraSauce() to take one parameter called cookName.

// function marinaraSauce(cookName) {
//     console.log("Heat a medium-large saucepan over medium heat.");
//     console.log();
//     console.log("Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
//     console.log();
//     console.log("Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
//     console.log();
//     console.log("Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
//     console.log();
//     console.log("Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
// }

// Step 2: Use cookName to print "Hey, cookName! This is my marinara sauce recipe!" before the recipe.

// function marinaraSauce(cookName) {
//     console.log(`Hey, ${cookName}! This is my marinara sauce recipe!`);
//     console.log();
//     console.log("Heat a medium-large saucepan over medium heat.");
//     console.log();
//     console.log("Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
//     console.log();
//     console.log("Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
//     console.log();
//     console.log("Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
//     console.log();
//     console.log("Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
// }

// Step 3: Change your function invocation to take "Adam" as a cookName
// marinaraSauce("Adam");

// Step 4: When you run your script, you should see "Hey, Adam! This is my marinara sauce recipe!", followed by the recipe.




// ** Using Variables **

// Step 1: At the top of your function definition, define a variable called two, and assign it the number value 2.
function marinaraSauce(cookName) {
    let two = 2;
    let oneFourth = "1/4";
    console.log(`Hey, ${cookName}! This is my marinara sauce recipe!`);
    console.log();
    console.log("Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("Add " + two + " tspns of oil and 5 carlic cloves, cook until golden, about " + two + " minutes");
    console.log();
    console.log(`Add ${oneFourth} cup water, ${two} cans of crushed tomates, and salt and season with black pepper to taste.`);
    console.log();
    console.log("Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log(`Stir in ${oneFourth} cup roughly chopped fresh basil, salt and pepper as needed.`);
}

marinaraSauce('Travis');

// Step 2: Use string concatenation (i.e. the "+" sign) to replace any instance of 2 or 1/4 that occurs in the recipe.