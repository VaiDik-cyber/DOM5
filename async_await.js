console.log("person1: shows tickets");
console.log("person2: shows tickets");

// //using Promise
// const promiseWifeBringingTickets = new Promise( (resolve,reject) => {
//     setTimeout(()=>{
//         resolve("ticket");
//     },3000);
// });

// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     console.log("wife: here is the tickets");
//     console.log("husband: let's go inside");
//     console.log("wife: no I'm hungry");
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t) => {
//     console.log("husband: I got some popcorn");
//     console.log("husband: Let's go in");
//     console.log("wife: I need butter on my popcorn");
//     return new Promise((resolve,reject) => resolve(`${t} butter`));
// });

// const getColddrink = getButter.then((t) => {
//     console.log("husband: I got butter on the popcorn.");
//     console.log("husband: Let's go inside.");
//     console.log("wife: Buy me some colddrink also");
//     return new Promise((resolve,reject) => resolve(`${t} colddrink`));
// })

// getColddrink.then((t) => console.log(t));



//Same code using async_await
const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("ticket");
        },3000);
    });
    const getPopcorn = new Promise((resolve,reject) => resolve("popcorn"));
    const getButter = new Promise((resolve,reject) => resolve("butter"));
    const getColdDrink = new Promise((resolve,reject) => resolve("colddrink"));

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: here is the ${ticket}`);
    console.log("husband: let's go inside");
    console.log("wife: no I'm hungry");

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log("husband: Let's go in");
    console.log("wife: I need butter on my popcorn");

    let butter = await getButter;

    console.log(`husband: I got ${butter} on the popcorn`);
    console.log("husband: Let's go inside.");
    console.log("wife: Buy me some colddrink also");

    let colddrink = await getColdDrink;

    console.log(`husband: hey, I got the ${colddrink} too!!`);
    console.log("wife: aww!! so sweet of you!");
    console.log("wife: lets go, we are getting late");
    console.log("husband: thanks for the reminder");

    return ticket;
};

preMovie().then((m)=> console.log(m));

console.log("person4: shows tickets");
console.log("person5: shows tickets");
