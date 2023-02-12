console.log("it works as always!")


let aRRNumber=[4,7,9,15,22]
function returnSumOfTheMaxNumber(numbArr){
    let counter=0
    let max=numbArr[0]
    
   

    while(counter < numbArr.length){
    let currentNumber= numbArr[counter];
    if (currentNumber>max){
        max=currentNumber;
        
            
    }

    counter++
    
    }
    return max
}
console.log(returnSumOfTheMaxNumber(aRRNumber))

function returnMinNumber(numbArr){
    let counter=0
    let min=numbArr[0]
    
   

    while(counter > numbArr.length){
    let currentNumber= numbArr[counter];
    if (currentNumber>max){
        max=currentNumber;
        
            
    }

    counter++
    
    }
    return min
}
console.log(returnMinNumber(aRRNumber))

console.log(`max is ${returnSumOfTheMaxNumber(aRRNumber)}, min is ${returnMinNumber(aRRNumber)},sum is ${returnSumOfTheMaxNumber(aRRNumber)+returnMinNumber(aRRNumber)}`)


