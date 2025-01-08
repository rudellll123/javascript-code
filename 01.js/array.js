const myArr = [0,1,2,3,4]
console.log(myArr[0]);


// different methods of array


myArr.push(3)
console.log(myArr);

myArr.pop(2)
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift(9)
console.log(myArr);

myArr.includes(9)
console.log(myArr);


const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);


//slice


console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

//splice

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr); 



// push / concat / spread 

const heros = ['marvel','elon','rahul']
const new_heros = ['zero','bmw','crsa']
heros.push(new_heros)
console.log(heros)

let marvel = new_heros
heros.concat(marvel)
console.log(heros)



//const allnewheros = [...heros,...all_new_heros]
//console.log(allnewheros);


// is , of , from

console.log(Array.isArray("Rahul"))
console.log(Array.from("Rahul"))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score(1,2,3)))