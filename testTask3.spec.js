const getNumbers = require('task3');
describe("A suite is just a function", function () {

    it("and so is a spec", function () {
        expect(getNumbers(5)).toEqual([3, 4, 5]);
    });
}); 
