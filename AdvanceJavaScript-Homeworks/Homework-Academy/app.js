console.log("works")


class Academy {
    constructor(name,students,subjects,start,end){
this.name=name;
this.students=students;
this.subjects=subjects;
this.start=start;
this.end=end;
numberOfClasses=this.subjects*10
    }
printStudents(){
console.log(this.students)
}
printSubjects(){
    console.log(this.subjects)
}
}

class Subject{
    constructor(title,isElective,academy,students){
        this.title=title;
        this.isElective=isElective;
        this.academy=academy
        this.students=students;
        numberOfClasses=10;
    }
    overrideClasses(num){
        if(num>3) return console.error("Can't be rewrites in console")
    }
    numberOfClasses=num
}

class Student{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.completedSubjects=[];
        this.academy=null;
        this.currentSubject=null;
    }

    startAcademy(){
        this.academy=Academy
        console.log(this.students)
        this.students=academy(this)
    }

    startSubject(){
this.subjects=Subject
if(!academy===subjects) return console.error("error")
    }






}

const studentDejan=new Student("Dejan","Mladenov",30)
console.log(studentDejan)
const studentElena=new Student("Elena","Jovanovska",26)
console.log(studentElena)