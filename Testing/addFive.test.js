// Import the addFive() function module from the jest.js file
// const {default: TestRunner} = require("jest-runner")
const addFive = require('./jest')

test('returns the number added to 5', () => {
    expect(addFive(2).toBe(7))
})
