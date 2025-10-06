// tests/example.test.js
const brokenFunction = require('../src/utils'); 
test('the test should fail', () => { 
  // This is the intentional failure point for the CI pipeline 
  expect(brokenFunction()).toBe(2); // Expects 2, but gets 1 
});