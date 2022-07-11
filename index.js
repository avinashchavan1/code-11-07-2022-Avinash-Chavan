const arrayStream = require("stream-json/streamers/StreamArray");
const path = require("path");
const fs = require("fs");
const stream = arrayStream.withParser();
const BMICheck = require("./utils/BMICheck");
const updateOutput = require("./utils/updateOutput");

fs.writeFileSync("./output.json", "[");

stream.on("data", (val) => {
  let updatedData = { ...val.value };
  let bmiRes = BMICheck(updatedData.HeightCm, updatedData.WeightKg);
  updatedData = { ...updatedData, ...bmiRes };
  updateOutput(JSON.stringify(updatedData) + ",");
});

stream.on("end", () => {
  updateOutput("]");
  console.log("File parsing complete");
});

const fileName = path.join(__dirname, "data.json");
fs.createReadStream(fileName).pipe(stream.input);
