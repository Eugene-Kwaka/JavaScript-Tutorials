const jsonStr = '{"greeting" : "Hello"}'
console.log(`JSON string -> ${jsonStr}`)

// To parse the JSON object to a JS object
const plainObj = JSON.parse(jsonStr)
console.log("JS object ->" , plainObj)

// I can manipulate and alter the JS object
plainObj.greeting = "hi"
console.log(plainObj)

// I can revert the JS object back to a JSON object
const newJSONStr = JSON.stringify(plainObj)
console.log("Reverted back to JSON -> ", newJSONStr)