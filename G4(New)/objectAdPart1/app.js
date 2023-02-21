console.log("works")


// function Person(firstName, lastName,age,country){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.fullName=`${this.firstName} ${this.lastName}`
//     this.age=age;
//     this.country=country;

//     this.printFullName=function(){
//         console.log(this.fullName)
//     }
// }

// const borche=new Person("Borche","Borisovski", 30, "Macedonia")
// console.log(borche)


// const student={
//     firstName:"Dejan",
//     lastName:"Mladenov",
//     age:30,
//     grades:{
//         basichtml:5,
//         basicJs:3,
//         advanceJS:2
//     }
// }
// const {firstName,lastName,age}=student
// console.log(firstName,lastName,age)

// const {grades:{basichtml,basicJs,advanceJS}}=student
// console.log(basichtml,basicJs,advanceJS)

// const numArray=[1,2,3]
// const remainArr=[4,5,6,7,8,9,10]
// const combinedNumbs=[...numArray,...remainArr]
// console.log(combinedNumbs)

const listEl=document.querySelector(".list")
const movie = {
    title: "Saving Private Ryan",
    director: "Steven Spielberg",
    country: "USA",
    year: 1999,
    productionInfo: {
        budget: "70 million",
        producer: "Ian Bryce",
    }
    
}

const renderInfo=({title,director,country,year,productionInfo:{budget,producer}}=movie)=>{

listEl.innerHTML+=`${title} ${director} ${country} ${year} ${budget,producer}`


}
const fruits = ['apples', 'oranges', 'lemons']

const vegetables = ['broccoli', 'carrots', 'cabbage']

const nuts = ['peanuts', 'almonds', 'walnuts', 'hazelnuts']

const plants=[...fruits,...vegetables,...nuts]
console.log(plants)




renderInfo()








































