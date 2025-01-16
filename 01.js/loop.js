for (let i = 0; i <= 10;i++){
    const element = i;
    console.log (element);
}

//loop inside loop

for (let i = 0; i <= 10; i++){
    console.log('outer loop:$ {i}')
    for (let j = 0; j <=10; j++){
        console.log('inner loop:$ {j} and outer loop${i}');
    }
}


// break and continue 

for (let index = 1; index <= 20 ; index++){
    if (index == 5){
        console.log('Detected 5')
        break;
    }
    console.log('value of index is $:{index}')
}


// while loop 
let i = 0
while (i<= 20){
    console.log ('value of i is $:{i}');
    i = i + 2
}

// while loop in arrays


let myArr = []