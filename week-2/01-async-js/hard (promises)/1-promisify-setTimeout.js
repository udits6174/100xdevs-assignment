/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(resolve, n*1000);
    });
    return promise;
}
console.log(wait(1).then(() => console.log("resolved")));
module.exports = wait;
