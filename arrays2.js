const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros] 
console.log(all_new_heros);

const anotherArray = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]
const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);

Array.isArray("Prajwal")
// console.log(Array.isArray("Prajwal"));
// console.log(Array.from("Prajwal"));  
// console.log(Array.from({name: "Prajwal"})); cannot convert object directly

''
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));
