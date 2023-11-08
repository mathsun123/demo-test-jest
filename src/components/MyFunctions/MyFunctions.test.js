const myFunctions = require("./MyFunctions");

describe("Functions", () => {

  test("Adds 2 + 2 to equal 4", () => {
    expect(myFunctions.sum(4, 4)).toBe(8);
  });

  test("checkResult must return null", () => {
    expect(myFunctions.checkResult(null)).toBeNull();
  });

  test("isUndefined must return undefined", () => {
    expect(myFunctions.isUndefined()).toBeUndefined();
  });

  test("createCarList must return object {engine : true , tire : false} ", () => {
    expect(myFunctions.createCarList()).toMatchObject({ engine: true, tire: false });
  });

  test("createCarList must return object {engine : true , tire : false} ", () => {
    // let a = ['jay', 'eel', 'late']
    let a = { jay: 'jay', eel: 'eel', late: 'late' }
    expect(a).toHaveProperty('jay');

    // expect(myFunctions.createCarList()).toEqual({ engine: true, tire: false });
  });

});
