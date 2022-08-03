console.log("hello");

// Q1. What is Callback Hell ?

// If you want to execute a function after the parent function has been executed, Callback hell can be created

// Create a callback hell where it will print numbers from 1 to 5

function printNumbers(){
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                    },5000);
                },4000);
            },3000);
        },2000);
    },1000);
}
printNumbers();

// Q2. Promises

// Create a promise to print vowels AEIOU after 65432 seconds

const printAlpha = (time,value) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log(value);
            resolve();
        },time);
    })
}
printAlpha(6000,"A")
    .then(() => printAlpha(5000,"E"))
    .then(() => printAlpha(4000,"I"))
    .then(() => printAlpha(3000,"O"))
    .then(() => printAlpha(2000,"U")) // multiple then blocks leads to promise chaining

// output- 
// A, after 6sec
// E, after 5sec
// I, after 4sec
// O, after 3sec
// U, after 2sec

// Async/Await-

const printNum = (time,value) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log(value);
            resolve();
        },time);
    })
}

async function newFunction(){
    await printNum(6000,"1")
    await printNum(5000,"2")
    await printNum(4000,"3")
    await printNum(3000,"4")
    await printNum(2000,"5")
}
newFunction();

// Pure Functions- It will give consistent results

function add(x,y){
    console.log(x*y);
}
add(4,5);
add(10,11);

// Arrow functions-

(a, b) => a + b + 100;