const getNumbers = require('./task1');
describe("A suite is just a function", function () {

    it("and so is a spec", function () {

        expect(getNumbers([3, 6, 15, 30, 9])).toBe(3);
    });
});
