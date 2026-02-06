const fname = "Karishma"
const lname = "Agra"

console.log(`Hi, i am ${fname} ${lname}`)

let apple = ["fruit", "juice", "pie"]
let numbers = new Array(1, 2, 3, 4, 5)

apple.push("Perfume")//add at end
apple.unshift("soup")//add at beginning
apple.pop()//remove from end
apple.shift()//remove from beginning
console.log(apple.indexOf("fruit"))//return index of element

const test = [1,2,3,4,5,6]
const data = test.map(num=> num*num)

console.log(data)
