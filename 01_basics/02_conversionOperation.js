let score = "33"

console.log(typeof score)
console.log(typeof(score))

let value = Number(score)

console.log(typeof value)

// "33" -> 33(number)
// "33abc" -> Nan(number)
// "true" -> 1(number)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)