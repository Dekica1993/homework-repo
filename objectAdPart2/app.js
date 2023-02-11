console.log("works")


class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.fullName=`${this.firstName} ${this.lastName}`
    }
    printPersonInfo(){
        console.log(this.fullName,this.age)
    }
}
const personOne=new Person("Bob", "Marly",54)
personOne.printPersonInfo()

class Student extends Person{
    constructor(firstName,lastName,age,academyName,studentId){
        super(firstName,lastName,age)
        this.academyName=academyName;
        this.studentId=studentId;
        
    }
    printStudyInfo(){
        console.log(`The Student${this.firstName} is studying ${this.academyName} with Id:${this.studentId}`)
    }
}

const dejan=new Student("Dejan","SEDC",505)
const elena=new Student("Elena","SEDC",509)
dejan.printPersonInfo()
elena.printPersonInfo()

class DesignStudent extends Student{
    constructor(firstName,lastName,age,studentId,isStudentOfTheMonth){
        super(firstName,lastName,age,"Design",studentId)
        this.isStudentOfTheMonth=isStudentOfTheMonth;

    }
    attendAdobeExam(){
        console.log(`The Student ${this.firstName} is doing attendAdobeExam`)
    }
}

class CodeStudent extends Student{
    constructor(firstName,lastName,age,studentId,hasIndividualProject,hasGroupProject){
        super(firstName,lastName,age,"Code",studentId,hasIndividualProject,hasGroupProject)
        this.hasIndividualProject= false
        this.hasGroupProject= true
    }
    
    doProject(){
        console.log(`This individual is work on the project${this.hasIndividualProject}`)
        console.log(`This Group is work on the project${this.hasGroupProject}`)
    }
}

class NetworkStudent extends Student{
    constructor(firstName,lastName,age,studentId,academyPart){
        super(firstName,lastName,age,"Network",studentId,academyPart)
        this.academyPart=1
    }
    printNetworkStudent(){
        console.log(`The Student ${this.firstName} is doing ciscoExam`)
    }
}

const teo=new DesignStudent("Teo")
teo.attendAdobeExam()
const project=new CodeStudent()
project.doProject()
const dame=new NetworkStudent("Dame")
dame.printNetworkStudent()

