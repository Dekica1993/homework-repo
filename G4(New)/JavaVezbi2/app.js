console.log("It works")

function createFullName(firstName,lastName){
    let fullname=`Hello my name is: ${firstName} ${lastName}`
    return fullname;
}
let trainerName=("Borche, Borisovski")
let assisstantName=("Danilo, Borozan")
console.log(trainerName,assisstantName)

function calculateTax(income, taxRate=20){
    console.log(taxRate)
    return taxRate=income*taxRate/100

}
let taxRate=calculateTax(1500,5)
let taxRateDanilo=calculateTax(450,20)
console.log(`Total taxRate for Danilo is: ${taxRateDanilo}`)
console.log(`Total taxRate for Borce is: ${taxRate}`)

let fruits=["apples , oranges , cherries"]
console.log(fruits)
const vegetables=[]
console.log(vegetables)

fruits.length-1
console.log(fruits)

let counter=101
let sum=0


while (counter<=150){
    sum+=Math.pow(counter,2)
counter++
}
console.log(sum)
