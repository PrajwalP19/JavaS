// let myName = "Prajwal     "

// console.log(myName.length);

// console.log((myName.trueLength));

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()









let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.prajwal = function(){
    console.log(`prajwal is present in all objects`);
    
}

Array.prototype.heyPrajwal = function(){
    console.log(`Prajwal says hello`);
    
}

// heroPower.prajwal()
// myHeros.prajwal()
// myHeros.heyPrajwal()
// heroPower.heyPrajwal()




// inheritance


// Old Syntax to link two objects

const user = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'JS asssignent',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

// where teachingsupport is given access of teacher 