//console.log(JsUser.["name","age","occupation","hobby"]);

// obj freeze
const JsUser(){
JsUser.email = "rj2544@gmail.com"
Object.freeze(JsUser)
JsUser.email = "rahul@gmail.com"}
//console.log(JsUser);


//singleton obj

const tinderUser = new object ();
//console.log(tinderUser);

// non - singleton obj

const tinderUser = {};
//console.log (tinderUser);

// assign obj 
const obj1 = {1:"a",2:"b"}
const obj2 = {2:"c",3:"d"}
const obj3 = object.assign({},obj1,obj3)
console.log(obj2);
h