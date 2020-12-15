const assert = require("assert");
const capitalizeFirst = require("../capitalizeFirstLetters");

describe("capitalizeFirst", () => {
  it("works with many words", () => {
    assert.strictEqual(capitalizeFirst("i am learning TDD"), "I Am Learning TDD");
  });

  it("works with a 1-character string", () => {
    assert.strictEqual(capitalizeFirst("z"), "Z");
  });

  it("works with an empty string", () => {
    assert.strictEqual(capitalizeFirst(""), "");
  });

  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirst, "function");
    assert.strictEqual(capitalizeFirst.length, 1);
  });

  it("transforms javaScript correctly", () => {
    assert.strictEqual(capitalizeFirst("javaScript"), "JavaScript");
  });

  it("it is a function", () => {
    assert.strictEqual(typeof capitalizeFirst, "function");
  });
});
