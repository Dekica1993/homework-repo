console.log("it works")

const animal={
    name: "Johny",
    kind:"German Shepard",
    speak: function(){
        this.speak=prompt("what the dog says??")
    }

}
 
animal.speak()
console.log(`Dogs Says: ${animal.speak}`)


