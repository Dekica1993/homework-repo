console.log("it works")


let array=["Hello","there", "students", "of", "SEDC", "!"]
function createOneBigString(textArray){
    let words=""
    for ( let i=0; i<textArray.length; i++){
        words+=textArray[i]
    }
    return words
}
console.log(createOneBigString(array))