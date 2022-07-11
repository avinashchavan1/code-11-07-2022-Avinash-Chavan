const fs = require("fs");

const updateOutput = (dataChunck) => {
  fs.open("./output.json", "a", (err, fd) => {
    if (err) throw err;
    fs.appendFile(fd, dataChunck, "utf8", (err) => {
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
  });
};
module.exports = updateOutput;
