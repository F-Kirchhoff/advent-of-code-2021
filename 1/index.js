const fs = require("fs");

const rawdata = fs.readFileSync("input.json");
const depthArray = JSON.parse(rawdata);

const depthCount = depthArray.reduce((acc, _, idx, self) => {
  return self[idx - 1] - self[idx] < 0 ? acc + 1 : acc;
}, 0);

console.log(depthCount);

const TripletsArray = Array(depthArray.length - 2)
  .fill(null)
  .map((_, idx) => depthArray[idx] + depthArray[idx + 1] + depthArray[idx + 2]);

const tripletsDeptCount = TripletsArray.reduce((acc, _, idx, self) => {
  return self[idx - 1] - self[idx] < 0 ? acc + 1 : acc;
}, 0);

console.log(tripletsDeptCount);
