var count = 0;
function counter() {
    count = count + 1;      
    setTimeout(counter, 1000);
    console.log(count);
}
counter();