const getNumbers = require('./task2');
describe("A suite is just a function", function () {

    it("and so is a spec", function () {

        expect(getNumbers([4, 16, 3])).toBe(2);
    });
});