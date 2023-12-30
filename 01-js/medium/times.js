/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let t1 = new Date();
    let sum = 0;
    console.time('Loop runtime');
    let time1 = performance.now();
    for(let i=0; i<n; i++){
        sum += i;
    }
    let time2 = performance.now();
    console.timeEnd('Loop runtime');
    let t2 = new Date();
    console.log(`Perf: ${(time2 - time1)/1000}`)
    return (t2 - t1)/1000;
}

console.log(calculateTime(1000000000));