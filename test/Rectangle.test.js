const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("is Square", () => {
    const testIsSquare = new Rectangle(7, 7);
    assert.strictEqual(testIsSquare.isSquare(), true);
  });

  it("is not Square", () => {
    const testIsSquare = new Rectangle(10, 7);
    assert.strictEqual(testIsSquare.isSquare(), false);
  });

  it("get Area", () => {
    const testArea = new Rectangle(10, 7);
    assert.strictEqual(testArea.getArea(), 70);
  });

  it("get Perimeter of rectangle", () => {
    const testPerimeter = new Rectangle(10, 8);
    assert.strictEqual(testPerimeter.getPerimeter(), 36);
  });
});
