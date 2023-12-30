const fs = require("fs");

fs.writeFile('./week-2/01-async-js/medium/myfile.txt', "hello     world    my    name   is       raman", 'utf-8',
 (err) => {
    if (err) throw err;
    console.log('Written with spaces!');
  });

fs.readFile(
  "./week-2/01-async-js/medium/myfile.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    // console.log(data);
    cbWrite(data);
  }
);
function cbWrite(data) {
    data = data.replace(/\s+/g, " "); //remove spaces
    fs.writeFile(
      "./week-2/01-async-js/medium/myfile.txt",
      data,
      (err) => {
        if (err) throw err;
        console.log("written with removed spaces!");
      }
    );
}