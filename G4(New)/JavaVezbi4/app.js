console.log("It works")


for (let i=1; i <=10; i++){
    console.log(i)

}
let fruits=["apple","watermelon"]
for (let fruit of fruits){
    console.log(fruit)

}

function findNumber(number,array){
    let total = 3
    for(let i=0; i<=array.lenght;i++){

    }
    return `The number ${number} appears ${total} times in the array`
}

let countResult=findNumber(2,[2,3,2,2,2])
console.log(countResult)

let countResult1=findNumber(5,[5,5,5,5,5,7,8,9])
console.log(countResult1)
let countResult2=findNumber(4,[5,,4,4,4,7,8,9])
console.log(countResult2)


function findNumber1 (numArray,type){
    let resultArray=[]   
    if (type==="even"){
        for (let num of numArray){
            if(num%2===0){
 resultArray.push(num)
            
            }
            

        }

    }
    else if(type==="odd"){
        for (let num of numArray){
            if(num%2===1){
                resultArray.push(num)
            }
        }
    }
    
return resultArray
}
let numArray=[1,2,3,4,5,6]
console.log(findNumber1(numArray,"even"))
console.log(findNumber1(numArray,"odd"))




