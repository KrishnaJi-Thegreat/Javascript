function show(){
    console.log("Hello world")
}

show()

function sow(a, ...b){ // ... is rest operator, first parameter goes to a, rest parameters goes to rest opreator
    console.log(a)
    console.log(b)
}

sow(10, 13, 12, 23, 4, 56)

const arr = [1,2,3,4,5];
const arr1 = [6,7,8,9,10];

const arr2 = arr + arr1 // string
console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(typeof(arr2))

const arr4 = [...arr,...arr1,...arr ];
console.log(arr4)

const[a,b,c,d,e] = arr; // destructuring of array
console.log(a+b+c+d+e)

const[x,y,...z] = arr1; // de-structuring of array with the help of rest operator
console.log(z)

let myobj = {
    name : "Krishna",
    age : 18,
    key : "LastBench"
}

console.log(myobj)

let dublicate={...myobj, key:"value"};
console.log(dublicate)

let dublicate1={name:"abc", key:"key",...myobj};
console.log(dublicate1)

let dublicate2={...myobj, name:"abc", key:"key"};
console.log(dublicate2)

let {name:currName, age:currAge, key} = myobj;
console.log(currName)
console.log(currAge)
console.log(key)

function nevermind(){
   let name = "Hello"
   let age = 2344
   let key = "kdne3"
   console.log(name, age, key)
}

nevermind()

function rest(...x){
    let [a,b,c,d] = x
    console.log(a+b+c+d)
}

rest(1,2,3,4)


