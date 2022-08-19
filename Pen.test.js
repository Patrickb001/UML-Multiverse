// describe, and test
// describe(title, callback function)
// test(title, callback function)
// expect(thing) .to

const Pen = require("./Pen");

describe("Pen", function () {
  test("create", function () {
    let pen = new Pen("pink");
    expect(pen.color()).toBe("pink");
  });

  test("no ink", function () {
    let pen = new Pen("green");
    pen.setHasInk(false);
    expect(() => {
      pen.sign("Makayla");
    }).toThrowError("ink");
  });
});
