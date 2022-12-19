console.log("it works as always!")


let aRRNumber=[4,7,9,15,22]
function returnSumOfTheMaxandMinNumber(numbArr){
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
console.log(`Max is: ${aRRNumber[4]}, Min is: ${aRRNumber[0]}, Sum is:${aRRNumber[4]+aRRNumber[0]}`)


