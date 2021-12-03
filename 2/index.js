const fs = require("fs");

const rawdata = fs.readFileSync("input.json");
const instructions = JSON.parse(rawdata);
