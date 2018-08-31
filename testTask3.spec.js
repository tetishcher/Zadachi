describe("A suite is just a function", function () {
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

    it("and so is a spec", function () {
        expect(getNumbers(5)).toEqual([3, 4, 5]);
    });
}); 
