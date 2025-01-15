//Function Say My Name {
    //console.log("R");
    //console.log("a");
   // console.log("H");
//}
 //Say My Name()


 //function add Two Number (num1,num2){
    //console.log(num1+num2)
// }
 //add Two Number (1,4)


 function loginUserMessage (username){
    return'{username}just loggedin'
    console.log (loginUserMessage("RAHUL"))
 }
 console.log (loginUserMessage("RAHUL"))



 //Global scope & local scope

 let a = 10
 if (true){
    let a = 10
    const b = 15
    console.log("Inner : ",a);
 }
 console.log(a);



 //closure

 function one (){
    const username = "rahul"
    function two (){
        const website = "youtube";
    console.log(username);
    }
//console.log(website);
two()
 }
 one()
 

 //this and arrow function


 const addTwo = (num1,num2) =>{
    return num1 + num2
 }
 console.log (addTwo(3,4))


 //immediately invoked function


 (function rj (){
   // console.log('DB CONNECTED');
 }) ();

 