const getNumbers = n => {
  const res = [];
  for (let a = 1; a <= n; a += 1) {
    for (let b = a; b <= n; b += 1) {
      for (let c = b; c <= n; c += 1) {
        if (a * a + b * b - c * c === 0) {
          res.push(a, b, c);
        }
      }
    }
  }
  return res;
};
module.exports = getNumbers;
console.log(getNumbers(process.argv[2]));