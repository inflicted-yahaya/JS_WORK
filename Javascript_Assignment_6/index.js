// sum = 0;
// for (step=1; step<=1000; step++) {
//     console.log (`Steps: ${sum + step}`)
// }

let myName = "Yahaya Barayavuga"

for (index=0; index<myName.length; index++) {
    console.log (myName[index])
}

let isLoggedIn = false;

while (isLoggedIn === false) {
    console.log ("User is not logged in")
    isLoggedIn = true;
    console.log ("User is now logged in")
}

let sum = 0;

let step = 1;

while (step<=10000) {
    sum += step
    step++
}

console.log (sum)

while (true) {
    console.log ("This is an infinity loop")
}