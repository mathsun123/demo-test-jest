const myFunctions = require("./MyFunctions");

describe("Functions", () => {
  test("Adds 2 + 2 to equal 4", () => {
    expect(myFunctions.sum(4, 4)).toBe(8);
  });
});
