console.log("it works")

const allParagraphs=document.querySelectorAll(".paragraph")
console.log(allParagraphs)
 console.log(allParagraphs.textContent)
 allParagraphs.textContent="This is interesting excercise but sure i have a lot of work."
 console.log(allParagraphs)
 const changeHeadersFirst=document.getElementById("firstDiv")
 console.log(changeHeadersFirst)
 const changeRestHeaders=document.querySelectorAll("div")
 console.log(changeRestHeaders)
 console.log(changeRestHeaders.textContent)
 console.log(changeHeadersFirst.textContent)
 changeHeadersFirst.textContent="This is NOT First DOM excercise!"
 changeRestHeaders.textContent="This is allready changed"