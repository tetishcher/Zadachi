describe("A suite is just a function", function () {
  const getNumbers = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const a = arr[i] % 3;
    const b = arr[i] % 5;
    if (a === 0 && b !== 0) {
      count += 1;
    }
  }
  return count;
};
    it("and so is a spec", function () {

        expect(getNumbers([3, 6, 15, 30, 9])).toBe(3);
    });
});