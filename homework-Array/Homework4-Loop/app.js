console.log("it works YEEE!")



function countToTwenty(number,type){
let result=[]
    if(type==="even"){
        for ( let num of number){
            if(num % 2 === 0){
               result.push(num) 
               console.log(`this number ${num} is "even"`)
            }
        }
return result
    }else if(type==="odd"){
        for( let num of number){
            if(num % 2 === 1 ){
                result.push(num)
                console.log(`this is ${num} is "odd"`)
            
            }
           
        }
        return result
        
    }
}


let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(countToTwenty(number,"even"))
console.log(countToTwenty(number,"odd"))

