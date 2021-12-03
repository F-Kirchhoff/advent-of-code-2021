const fs = require("fs");

const rawdata = fs.readFileSync("input.json");
const data = JSON.parse(rawdata);

// find Gamma Rate
const gammaRate = Number(
  "0b" +
    data[0]
      .split("")
      .map((_, idx) => {
        const oneCount = data.filter((line) => line[idx] === "1").length;
        return Number(oneCount > data.length / 2);
      })
      .join("")
);
const mask = 2 ** data[0].length - 1;
const epsilonRate = gammaRate ^ mask;

console.log({ gammaRate, epsilonRate, sol: gammaRate * epsilonRate });
