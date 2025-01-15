const userLoggedIn = true
const debitcard = true
if (userLoggedIn && debitcard){
    console.log("Allow to buy course");
}

//switch cas
let month = 3
switch (month){
    case 1 :
        console.log ("Jan");
        break;
        case 2 :
        console.log("Feb");
        break;
        case 3 :
            console.log("Mar")
            break;
            default:
                console.log("default")
}



//when obj is empty

const emptyobj = {}
if (Object.keys(emptyobj).length===0){
    console.log("object is empty");
}



// nullish coalescing operator

let val1;
val1 = 5 ?? 10
console.log(val1);


// terniary operator


const icetea = 100
icetea >=80 ?
console.log("less than 80"): console.log("more than 80")