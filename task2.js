const getNumbers = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const a = arr[i] % 2;
    if (a === 0) {
      count += 1;
    }
  }
  return count;
};
module.exports = getNumbers;
console.log(getNumbers(process.argv.slice(2)));
