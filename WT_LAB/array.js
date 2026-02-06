let ages = [23, 34, 45, 12, 21, 11, 56, "Krishna"]
console.log("Krishna")
for(i=0; i<ages.length; i++){
    console.log(ages[i])
}
for(i in ages){
    console.log(ages[i])
}
for(i of ages){
    console.log(i)
}
ages.sort()
console.log(ages)