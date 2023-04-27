console.log("person1: shows tickets");
console.log("person2: shows tickets");

//using Promise
const promiseWifeBringingTickets = new Promise( (resolve,reject) => {
    setTimeout(()=>{
        resolve("ticket");
    },3000);
});

const getPopcorn = promiseWifeBringingTickets.then((t)=>{
    console.log("wife: here is the tickets");
    console.log("husband: let's go inside");
    console.log("wife: no I'm hungry");
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log("husband: I got some popcorn");
    console.log("husband: Let's go in");
    console.log("wife: I need butter on my popcorn");
    return new Promise((resolve,reject) => resolve(`${t} butter`));
});

const getColddrink = getButter.then((t) => {
    console.log("husband: I got butter on the popcorn.");
    console.log("husband: Let's go inside.");
    console.log("wife: Buy me some colddrink also");
    return new Promise((resolve,reject) => resolve(`${t} colddrink`));
})

getColddrink.then((t) => console.log(t));

console.log("person4: shows tickets");
console.log("person5: shows tickets");
