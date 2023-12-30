/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let promise = new Promise((resolve, reject) => {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {}
    resolve();
  });
  return promise;
}
console.log(sleep(5000).then(() => console.log("resolved")));
module.exports = sleep;
