//  for of

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    // console.log(element);
    
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}



// maps

// const map = new Map()

// map.set('In', "India")
// map.set('USA', "United States Of America")
// map.set('FRA', "France")
// map.set('FRA', "France") no re-entry is allowed
 
// console.log(map);

// for (const key of map) {
//     console.log(key);   
// }

// to print value and keys seperately use below code - 

// for (const [key, value] of map) {
//     // console.log(key, ":=", value);   
// }


// object is not iterable so cannot use For-of
// const myObj = {
//     'game1': 'NFS',
//     'game2': 'COD'
// }

// for (const [key, value] of myObj) {
//     // console.log(key, ":=", value);
// }



//  so, to for object For-in is used

// const myObject = {
//    js: 'javascript',
//    cpp: 'c++',
//    rb: 'ruby',
//    swift: 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(key);
    
// }

//  to get object along with keys then use below  -


const myObject = {
   js: 'javascript',
   cpp: 'c++',
   rb: 'ruby',
   swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key]);

    // or
    // console.log(`${key} shortcut is for ${myObject[key]}` );
    
}


// can for-in be used for arrays? --

// const programming = ['js', 'cpp', 'rb', 'python', 'java']

// for (const key in programming) {
//     console.log(key);
// }

//    to get values use below structure

const programming = ['js', 'cpp', 'rb', 'python', 'java']

for (const key in programming) {
    // console.log(programming[key]);
    
}


// can map function be used for for-in == map is not iterable so, cannot use for-in

// const map = new Map()

// map.set('In', "India")
// map.set('USA', "United States Of America")
// map.set('FRA', "France")

// for (const key in map) {
//     // console.log(key);
    
// }



// forEach

// *callback functions doesn't have name

const coding = ['js', 'java', 'python', 'ruby']

// coding.forEach( function (val) {
//     console.log(val);
    
// })

// or

// coding.forEach( (item) =>{
//     console.log(item);
    
// })

// or

// function printMe (item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

//  to print multiple values use below code ==

// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr);
  
// })



// to declare objects in Array --

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js' 
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach( (item) =>{
    // console.log(item.languageFileName);
    
})