const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }
  data = input;
  data = data.split("\n").map((n) => Number(n));

  fs.writeFile("input.json", JSON.stringify(data), "utf8", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
});
