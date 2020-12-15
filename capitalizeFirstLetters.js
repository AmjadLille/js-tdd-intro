const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE
const capitalizeFirst = (str) => {
  return str.replace(/(^\w{1})|(\s{1}\w{1})/g, (sent) => sent.toUpperCase());
};

// Check that capitalizeFirst is a String
assert.strictEqual(capitalizeFirst("i am learning TDD"), "I Am Learning TDD", "must capitalize all first letter of words");

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst("z"), "Z", "must capitalize first letter of word");

// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(""), "", "not passed");

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1, "not passed");

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst("javaScript"), "JavaScript", "must be written by JS");

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, "function", "must be a function");
