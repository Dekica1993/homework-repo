console.log("it works")

const nameRecipeEl=document.querySelector(".first-class")
nameRecipeEl.innerHTML+=prompt("What is your racipe?")
console.log(nameRecipeEl)
const howManyIngredients=prompt("How many ingredients do you need?")
console.log(howManyIngredients)

const oneIngredients=document.querySelector(".one-ingredient")
oneIngredients.innerHTML+=prompt("Name first ingredients?")
const twoIngredients=document.querySelector(".two-ingredient") 
twoIngredients.innerHTML+=prompt("Name second ingredients?")
const threeIngredients=document.querySelector(".three-ingredient") 
threeIngredients.innerHTML+=prompt("Name third ingredients?")
const fourIngredients=document.querySelector(".four-ingredient") 
fourIngredients.innerHTML+=prompt("Name fourth ingredients?")
const fiveIngredients=document.querySelector(".five-ingredient") 
fiveIngredients.innerHTML+=prompt("Name fifth ingredients?")


console.log(oneIngredients,twoIngredients,threeIngredients,fourIngredients,fiveIngredients)