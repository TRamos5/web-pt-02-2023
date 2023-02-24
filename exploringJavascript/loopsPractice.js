// Lets check all days of the week using FOR Loop
// Use the same variables from the other exercise

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

const whatDaysCanWeGoToTheMovies = '';

for (let i = 0; i < daysOfWeek.length; i++) {
    canWeGoToTheMovies(daysOfWeek[i]);
}

// for (let value of daysOfWeek) {
//     canWeGoToTheMovies(daysOfWeek[value]);
// }

// daysOfWeek.forEach(val => {
//     canWeGoToTheMovies(val)
// })
