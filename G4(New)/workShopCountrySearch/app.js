console.log("works")


mainListEl=document.querySelector(".main-list")
searchBtn=document.querySelector(".search-btn")
listId = document.querySelector("#myInput")




function fetchSearchApi(){
    fetch(search_api)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

    })
 
 }
 
 searchBtn.addEventListener("click",()=>{
   const search_api=`https://restcountries.com/v3.1/name/${listId.value}`

   fetch(search_api)
    .then(res=>res.json())
    .then(data=>{
        renderSearchBar(data)
console.log(data)
    })
    
 
 })

 function renderSearchBar(data) {
console.log(data)
mainListEl.innerHTML+=`<ol>${data.name}</ol>`

}
