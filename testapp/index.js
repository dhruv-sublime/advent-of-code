const fs = require("fs");

const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let sum = 0;

fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(typeof sum, "1");
  if (err) {
    console.error(err);
    return;
  }

  console.log(handleFinalSum(data)); // output sum : 54916
});

function handleFinalSum(data) {
  const lines = data.split("\n");
  for (let i = 0; i < lines.length; i++) {
    sum += handleExtractDigit(lines[i]);
  }
  return sum;
}
function handleExtractDigit(word) {
  let firstDigit = null;
  let lastDigit = null;

  for (let i = 0; i < word.length; i++) {
    if (numberArray.includes(word[i])) {
      if (firstDigit === null) firstDigit = word[i];
      lastDigit = word[i];
    }
  }

  let finalDigit;
  firstDigit === lastDigit
    ? (finalDigit = parseInt(firstDigit + firstDigit))
    : (finalDigit = parseInt(firstDigit + lastDigit));

  return finalDigit;
}
