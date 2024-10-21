
// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }



// //console.log(user.username)
// //console.log(user.getUserDetails());
// // console.log(this);


// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     this.greeting = function(){
//         console.log(`Welcome ${this.username}`);

//     }

//     return this
// }

// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);
// //console.log(userTwo);


// const user = {
//     username: "prajwal",
//     loginCount: 8,
//     signIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        
        
        
//     }
// }

// console.log(user.getUserDetails());
// console.log(this);

function user(username, loginCount, isLoggedIn){
     this.username = username 
     this.loginCount = loginCount
     this.isLoggedIn = isLoggedIn

     // return this
}

const userOne = new  user("Prajwal", 12, true)
const userTwo = new user("Chaiaurcode", 11, false)

console.log(userOne);
console.log(userTwo);
