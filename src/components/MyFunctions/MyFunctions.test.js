const myFunctions = require("./MyFunctions");

describe("Test Basic Functions", () => {

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

  test("test object truthfulness ", () => {
    let a = { jay: 'isSingle', eel: 'isAFish', late: 'isNotEarly' }
    expect(a).toHaveProperty('jay');

    expect(a['jay']).toBe('isSingle')

    expect(a).toHaveProperty('eel', 'isAFish')

  });

});
