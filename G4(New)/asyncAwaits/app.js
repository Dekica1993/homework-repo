console.log("works")


// const testPromiseFunc=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("This is it")
//         },1500)
//     })
// }
// const testResult=()=>{
//     testPromiseFunc()
//     .then(value=>{
//         console.log(value)
//     })
// }
// testResult()

// const asyncExample= async()=>{
//     const firstPromiceData=await testPromiseFunc()
//     console.log(testPromiseFunc())
// }
// asyncExample()

// const fetchUserAsync=async()=>{
//     const res=await fetch("")
//     const data=await res.json()
//     console.log(data)
// }
// fetchUserAsync()

// const cutSalad=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("All vegetables diced")
//         },1500)
//     })
// }
// const addOil=()=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve("Added Oil")
//        },1500)
//     })
// }
// const mixSalad=()=>{
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         resolve("Mixed Salad")
//      },1500)  
//     })
// }

// const saladServed=async()=>{
//  const resOne= await cutSalad()
//  console.log(resOne)
//   const resTwo=await addOil()
//   console.log(resTwo)
//   const restThree=await mixSalad()
//   console.log(restThree)
  
  

// }

// saladServed()

// const fetchStudents=()=>{
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// }
// const averageGradeAll=student=>{
//     const studentListEl=document.querySelector(".list-title")
//     studentHTML=student.reduce(acc)
// }
// fetchStudents()