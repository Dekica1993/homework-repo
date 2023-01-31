// const nameEl=document.querySelector("name")
// const cardEl=document.querySelector("fake-card")

// const fetchName=("https://fakestoreapi.com/products")


// function fetchProducts(){
//     fetch(fetchName)
//     .then (function(res){
//         return res.json()
//     })
//     .then(function(data){
//         renderProducts(nameEl,data)
        
           
//     })
  
   

// }

// fetchProducts()
// function renderProducts(nameEl,cardEl){
//     let productsHTML=""
//     for(let products of nameEl){
//         productsHTML.innerHTML+= `<div class="fake-card"></div>
//         <h3>${products.id} ${products.title}</h3>`
        
//     }    
//     nameEl.innerHTML=productsHTML 
//     }

// const sayHello=()=>{
//     console.log("hello from the arrow funcion")
// }

// sayHello()

// const prinMoney=money=>`You have a total of ${money}$`

// console.log(prinMoney(10000))


// function makeDigitsNumb(numOne){
//     return numOne
// }
// console.log(makeDigitsNumb(30))

// function getNumberEven(operator,numOne,numTwo){
//     if(operator==="even"){
//       return  (numOne,numTwo)
//     }
//     if(operator==="odd"){
//         return (numOne,numTwo)
//     }
// }
// console.log(getNumberEven("even",2,4))
// console.log(getNumberEven("odd",1,3))

// function returnNumber(operator){
//     if(operator>0){
//         return ("positive")
//     }
//     if(operator<0){
//         return ("negative")
//     }
    


// }
// console.log(returnNumber(4))
// console.log(returnNumber(-8))

// function getNumberStats(){
//     makeDigitsNumb()
//     getNumberEven()
//     returnNumber()  
// }
// console.log(getNumberStats(-25))


const RAW_GITHUB="https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
.then(res=>res.json())
.then(data=>app(data))
const app=data=>{
    const studentFilter=data.filter(student=>student.averageGrade>=3)
    console.log(studentFilter)
    const studentFemale=data.map(student=>{
       console.log(`${data.firstName} ${} `)
    })
    console.log(studentFemale)
}



