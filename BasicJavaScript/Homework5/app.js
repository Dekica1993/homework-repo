console.log("it works")



let money=1000
let result=prompt("How much money do you like?")
function ATM (result,money,result1){
    if (result<1000){
        let result1=result-1000
        console.log(`Money withdrawn! and you have ${result1} left`)
        money++
       return 
    }
 
 else {
    console.log("Not enough money")
 }



}
ATM(result)