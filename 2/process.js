fs.readFile("input.txt", "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }
  data = input;
  data = data
    .split("\n")
    .map((line) => line.split(" "))
    .map((line) => [line[0], Number(line[1])]);

  fs.writeFile("input.json", JSON.stringify(data), "utf8", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
});
