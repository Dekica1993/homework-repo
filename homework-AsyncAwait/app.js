console.log("works")


const fetchStudentsPromise=()=>{
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(res=>res.json())
    .then(students=>generateSolutions(students))
}
const generateSolutions=students=>{
    
    students.innerHTML=`${students.firstName}`
    const allStudentsCombined=students.reduce((acc,student)=>{
        return acc+student.age /100
        
    },0)
    console.log(allStudentsCombined)
    console.log(students.reduce((acc,student)=>{
        return acc+student.averageGrade /100
    },0))
    console.log(students.reduce((acc,student)=>{
     return acc+student.age >60
    },0))
    console.log(students.reduce((acc,student)=>{
        return acc+student.age <30
       },0))
       console.log(students.filter(student=>student.firstName && 
        student.city && 
        student.age >30 && 
        student.averageGrade>=4))   
        const name=students.find(student =>student.firstName==="Artuh")
        console.log(name)
        console.log(students.find(student=>student.age<=12))
        console.log(students.find(student=>student.age>=42))
        console.log(students.filter(student=>student.firstName && student.lastName[8]))
        console.log(students.filter(student=>student.averageGrade[0,10]>=5))
        console.log(students.filter(student=>student.age>18 && student.averageGrade>=1))
        
        
}










fetchStudentsPromise()