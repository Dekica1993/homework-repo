console.log("works")

planetListEl=document.querySelector(".plenet-list")
planetCardEl=document.querySelector(".planet-card")
clickBtn=document.querySelector("#btn")

console.log(planetListEl,planetCardEl,clickBtn)


const fetchPlanets=()=>{
    fetch("https://swapi.dev/api/planets/?page=1")
    .then(res=>res.json())
    .then(planets=>renderPlanetList(planets))

    }
    
const renderPlanetList=planets=>{
    const firstShowData=planets.map(planet=>`${planet.name} ${planet.population} ${planet.climate} ${planet.gravity}`)
    console.log(firstShowData)
}   


fetchPlanets()






   
        
