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

    it("and so is a spec", function () {

        expect(getNumbers([4, 16, 3])).toBe(2);
    });
});
