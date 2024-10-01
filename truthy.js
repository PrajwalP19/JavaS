// truthy value, Falsy value

// const userEmail = "p@prajwal.ai"

// if (userEmail) {
    // console.log("Got user email");
    
// }else{
    // console.log("Don't have user email");
    



// truthy = (), [], "0", 'false', " " empty string with space, {}, function (){},  

// flasy = false, 0, -0, BigInt 0n, "" empty string, null, undefined, NaN 


const userEmail = []

if (userEmail.length === 0) {
    // console.log("Array is empty");
    
}

const emptyObj = {}

if (Object.keys (emptyObj).length === 0) {
    // console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??) : null undefined  (made specialy for null and undefined values)

let val1;
// val1 = 5 ?? 10

// val1 =  null ?? 10

// val1 = undefined ?? 10

val1 = null ?? 10 ?? 15


// console.log(val1);



// ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


