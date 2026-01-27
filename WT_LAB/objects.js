const stuudent = {
    name : "Amit",
    age : 21,
    course : "CSE",
    greet : function(){
        console.log("Hello, my name is " + this.name)
    }
};




function Student(name, age) {
    this.name = "Amit";
    this.age = 21;
}

const s1 = new Student("Ravi", 20);




const car = new Object()
car.brand = "TOyota";
car.model = "Corolla";




class STUDENT {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, I am ${this.name}`)
    }
}

const s2 = new STUDENT("Amit", 21);