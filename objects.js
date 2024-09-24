// object literals


const mySym = Symbol("key1")


const Jsuser = {
    name: "Prajwal",
    age: 20,
    [mySym]: "mykey1",
    location: "Pune",
    email: "pp@123",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "patil@23"
// Object.freeze(Jsuser)
Jsuser.email = "eryu@e64"
// console.log(Jsuser.email);


Jsuser.greetings = function(){
    console.log("hello js user");
    
}

Jsuser.greetingsTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(Jsuser.greetingsTwo());
// console.log(Jsuser.greetings);
