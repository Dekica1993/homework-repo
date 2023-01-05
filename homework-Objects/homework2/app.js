console.log("it works")

const bookReading={
    title:"Harry Potter and a Chamber of Secrets",
    author:"J K Rowling",
    readingStatusOne:true,
    readingStatusTwo:false,
    readingStatusFirst: function(){
        this.title="Harry Potter and a Chamber of Sicrets"
        this.readingStatusOne=true
        console.log(`${this.title} ${this.readingStatusOne}`)
    },
    readingStatusTwoEl:function(){
        this.title="All books from J K Rowling you must read. "
        this.readingStatusTwo=false
        console.log(`${this.title} ${this.readingStatusTwo}`)
    },
    printFullBook(){
        this.readingStatusFirst()
        this.readingStatusTwoEl()
    }
    

}

bookReading.printFullBook=prompt("which book do you read?")
bookReading.readingStatusFirst()
bookReading.readingStatusTwoEl()




