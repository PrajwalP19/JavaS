// Immidiately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNETED`);
    
// }
// chai()

(function chai(){
    // named IIFE
    console.log(`DB CONNETED`);
    
})();

( () =>{
    console.log(`DB CONNECTED TWO`);
    
})();


// to stop the context of code ; is used otherwise code will not run
//  to avoid the pollution caused due to global scope, IIFE is used

( (name) =>{
    
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Prajwal')
