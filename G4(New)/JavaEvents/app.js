console.log("it works!")
let nameButton = document.querySelector("#namebutton")
console.log(nameButton)

function clickButton() {
    console.log("Hello Dejan")
}
nameButton.addEventListener("click", clickButton)

let changeParagraph = document.querySelector("p")
console.log(changeParagraph)

function addColor() {
    changeParagraph.style.backgroundColor = "red";
    changeParagraph.style.color = "white";
    changeParagraph.style.fontSize = "16";
}
nameButton.addEventListener("click", addColor)

let firstName=document.querySelector(".text")
console.log(firstName)
let lastName=document.querySelector(".text")
console.log(lastName)
let Email=document.querySelector(".text")
let Password=document.querySelector(".Password")

function callTheButton(){
    
    
}


