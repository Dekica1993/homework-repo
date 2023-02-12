console.log("it works")

const bookReading={
    title:"Harry Potter and a Chamber of Secrets",
    author:"J K Rowling",
    readingStatusOne:true,
    readingStatusTwo:false,
    readingStatusFirst: function(){
        if(this.readingStatusOne===true){
            console.log(`Book: ${this.title} is read`)
        }else{
            console.log(`Book: ${this.title} is not read`)
        }
    },
    readingStatusTwoEl:function(){
       if(this.readingStatusTwo===true){
        console.log(`Book: ${this.title} is read`)
       }else{
        console.log(`Book: ${this.title} is not read`)
       }
    },
    printFullBook(){
        this.readingStatusFirst()
        this.readingStatusTwoEl()
    }
    

}


bookReading.readingStatusFirst()
bookReading.readingStatusTwoEl()
const client=prompt("Which book do you need?")




