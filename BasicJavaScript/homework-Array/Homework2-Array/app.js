console.log("it works")


function returnTheSum(numbers){
    let sum=0;
    for( let i=0; i<numbers.length; i++){
        sum+=numbers[i]
    }
return sum
}
console.log(returnTheSum([2,4,6,8,10]))