const myFriendsSchedule = {
    Sunday: true,
    Monday: true,
    Tuesday: false,
    Wednesday: true,
    Thursday: false,
    Friday: true,
    Saturday: false
}

const myMoneySchedule = {
    Sunday: 20,
    Monday: 15,
    Tuesday: 15,
    Wednesday: 10,
    Thursday: 17,
    Friday: 12,
    Saturday: 5
}

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

function canWeGoToTheMovies(dayOfWeek) {
    const canGoToMovies = myFriendsSchedule[`${dayOfWeek}`];
    const money = myMoneySchedule[`${dayOfWeek}`];
    
    const costToSeeAMovie = 15;

    if (canGoToMovies === true && money >= costToSeeAMovie) {
        console.log("On " + dayOfWeek + "? Yes, lets go to the movies!!");
    } else if (canGoToMovies === true || money >= costToSeeAMovie) {
        console.log("On " + dayOfWeek + "? One of us can go to the movies");
    } else {
        console.log("On " + dayOfWeek + "? We can't go to the movies");
    }
}

let i = 0;

while (i < daysOfWeek.length) {
    canWeGoToTheMovies(daysOfWeek[i]);
    i++;
}





// Anonomous Function Examples:
const add = (x, y) => {
    return x + y;
  }
const sub = (x, y) => {
    return x - y;
};
const mul = (x, y) => {
    return x * y;
};
const div = (x, y) => {
    return x / y;
}


const apply = (a, b, myFunction) => {
    const val = myFunction(a, b); //div(10, 2)
    return val;
}

const resultOne = apply(10, 2, sub);
console.log(resultOne);



// Map example

const numArray = [1, 2, 3, 4, 5, 6, 7];

// const secondArray = numArray.map((num) => {
//     return num + 5
// });

const secondArray = numArray.map(num => num + 5);

console.log(secondArray);





