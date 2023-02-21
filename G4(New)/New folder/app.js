console.log("it works")

let numbers=[]
//for (let i=1; i<=1000; i++){
//    if(i%3===0){
  //      numbers.push(i)
    //}

////console.log(numbers)

//for (let i=1; i<=1000; i++){
  //  if(i%4===0){
    //    numbers.push(i)
    //}

//}
//console.log(numbers)


//for (let i=1; i<=1000; i++){
  //      if(i%10===1){
    //     numbers.push(i)
      //  }
    
    //
    //console.log(numbers)

//     let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
//     function arrayString(array){
//         let emptyArray=[]
//         for (array of emptyArray){
//             if(typeof array=== "string"){
//               emptyArray.push(array)
//             }
//         }
//     }
// console.log(arrayString(test))


//     function arrayNumber(numb){
//         let emptyArray=[]
//         for (numb of emptyArray){
//             if(numb=== "number"){
//               emptyArray.push(numb)
//             }
//         }
//     }
// console.log(arrayNumber(test))
// function arrayOther(arr){
//   let emptyArray=[]
//   for (item of arr){
//       if(!item){
//         emptyArray.push(item)
//       }
//   }
// }
// console.log(arrayOther(test))

// const bodyEl=document.querySelector("body")
// function generateRandomColor(){
//   const red=Math.floor(Math.random()*255)
//   const green=Math.floor(Math.random()*255)
//   const blue=Math.floor(Math.random()*255)
//   const generateColor=`rgb(${red}, ${green}, ${blue})`
//   return generateColor
  
// }
// function changeBodyColor(){
//   const randomColor=generateRandomColor()
//   bodyEl.style.backgroundColor=randomColor
//   bodyEl.innerHTML=`<h1>${randomColor}</h1>`
  
// }
// changeBodyColor()





// const inputColor=document.getElementById("color")
// const inputFontSize=document.getElementById("font-size")
// const inputText=document.getElementById("text-title")
// const headingContainerEl=document.querySelector(".heading-container")
// const clickButton=document.getElementById("btn")

// function generateElement(inputText,inputColor,inputFontSize,headingContainerEl){
  
// headingContainerEl.textContent=inputText;
// headingContainerEl.style.color=inputColor;
// headingContainerEl.style.fontSize=`${inputFontSize}px`

// }
// clickButton.addEventListener("click",function(){
//   generateElement(
//     inputText.value,
//     inputColor.value,
//     inputFontSize.value,
//     headingContainerEl
  
//   )
// })


// this.firstName=firstName;
// this.lastName=lastName;
// this.birthYear=birthYear;
// this.academy=academy;
// this.grades=grades;

// this.getAge=function(){
//   return new Date().getFullYear()-this.birthYear
  
// }
//  this.getInfo=function(){
//   console.log(`This is ${this.firstName} ${this.lastName} from the ${this.academy}`)
// }
// this.getGradesAverage=function(){
// for (let grade of grades){
  
// }
// }
// this.firstName=firstName;
// this.lastName=lastName;
// this.birthYear=birthYear;
// this.academy=academy;
// this.grades=grades;

// this.getAge=function(){
//   return new Date().getFullYear()-this.birthYear
  
// }
//  this.getInfo=function(){
//   console.log(`This is ${this.firstName} ${this.lastName} from the ${this.academy}`)
// }
// this.getGradesAverage=function(){
// for (let grade of grades){
  
// }
// }

// const names=["Dejan","Alonso","Petra","Marko","Elena"]

// mainTitleEl=document.getElementById("header")
// mainListEl=document.querySelector(".list-of-names")
// buttonClickEl=document.getElementById("btn")

// function inputNames(){
//   names.value=""
// }
// function renderNames(){

//   for (let name of names){
//     console.log(names)
//     mainListEl.innerHTML+=`<li>${name}</li>`
//   }

// }
// buttonClickEl.addEventListener("click",function(){
//   renderNames()
// })


// const inputFirstNameEl=document.getElementById("first-name")
// const inputLastNameEl=document.getElementById("last-name")
// const inputAgeEl=document.getElementById("age")
// const inputEmailEl=document.getElementById("email")
// const headingContainerEl=document.getElementById("container")
// const clickButton=document.getElementById("btn")

// function generateNewList(text,color,fondSize,headingContainerEl){
//   headingContainerEl.style.color=color;
//   headingContainerEl.style.fontSize=`${fondSize}px`
//  headingContainerEl.innerHTML+=`<li>${text} ${color} ${fondSize}</li>`

  
// }
// clickButton.addEventListener("click",function(){
//   generateNewList(inputTextEl.value,inputColorEl.value,inputFontSizeEl.value,headingContainerEl)
// })

const inputFirstNameEl=document.getElementById("first-name")
const inputLastNameEl=document.getElementById("last-name")
const inputAgeEl=document.getElementById("age")
const inputEmailEl=document.getElementById("email")
const headingContainerEl=document.getElementById("container")
const clickButton=document.getElementById("btn")

function Student (firstName,lastName,age,email){
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
  this.email=email;

  
 
}

function addInputs(){
  const database=[]  
  database.innerHTML+=`<ul>${inputFirstNameEl} ${inputLastNameEl} ${inputAgeEl} ${inputAgeEl}</ul>`
}
clickButton.addEventListener("click",function(){
  addInputs(inputFirstNameEl.value,inputLastNameEl.value,inputAgeEl.value,inputEmailEl.value,headingContainerEl)
})
