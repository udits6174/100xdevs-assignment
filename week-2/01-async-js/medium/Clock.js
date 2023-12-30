function gettime() {
    let date_time = new Date();
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();
    let seconds = date_time.getSeconds();
    let ampm = hours > 12 ? "PM" : "AM";
    let formattedTime = hours + ":" + minutes + ":" + seconds;
    let twelveHourFormat = (hours>12 ? hours-12 : hours) + ":" + minutes + ":" + seconds + " " + ampm;
    process.stdout.write(`24-Hour Format: ${formattedTime}\n`);
    process.stdout.write(`12-Hour Format: ${twelveHourFormat}\n`);
}
setInterval(() => {
    process.stdout.moveCursor(0, -2);
    process.stdout.clearLine();  // Clear the current line
    process.stdout.cursorTo(0);  // Move cursor to beginning of line
    gettime();
}, 1000);
