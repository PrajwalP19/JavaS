// Primitive = (Call by value) 
// 7 types = string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol ('123')
const anotherId = ('123')
console.log(id === anotherId);



const bigNumber = 7534765308407n 



// Non-primitive = (call by refrence)
//  3 types = array, object , function



const heros = ["shaktiman","naagraj", "doga"];

let myObj = {
    name: "Prajwal",
    age: 23,
}

 const myFunction = function(){
    console.log("Hello World");
    
 }