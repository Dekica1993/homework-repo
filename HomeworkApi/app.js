console.log("works")

planetListEl=document.querySelector(".plenet-list")
planetCardEl=document.querySelector(".planet-card")
clickBtn=document.querySelector("#btn")

console.log(planetListEl,planetCardEl,clickBtn)


const fetchPlanets=()=>{
    fetch("https://swapi.dev/api/planets/?page=1")
    .then(res=>res.json())
    .then(data=>renderPlanetList(planetListEl,data.results))
    
}   
const renderPlanetList=(listEl,planetListData)=>{
    for (let el of planetListData){
       const newLi=document.createElement("LI")
       newLi.textContent=el.name,el.population,el.climate,el.gravity
       listEl.appendChild(clickBtn)
       clickBtn.addEventListener("click",()=>{
        fetchPlanetsByUrl(el.url)
       })
    }
}
const fetchPlanetsByUrl=(url)=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>renderPlanetsDetails(planetCardEl,data))
}
 const renderPlanetsDetails=(cardEl,planets)=>{
    cardEl.innerHTML=`${planets.name} ${planets.population} ${planets.climate} ${planets.gravity}`
 }
   
 fetchPlanets()






   
        
