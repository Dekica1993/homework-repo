console.log("it works")


apiBtn=document.querySelector(".btn")
homeBtn=document.querySelector(".home-btn")
aboutBtn=document.querySelector(".about-btn")
mainEl=document.querySelector(".main")
dailyCard=document.querySelector(".daily-card")


const WETH_API="https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"

function fetchWetherApi(){
   
        fetch(WETH_API)
        .then(res=>res.json())
        .then(data=>{
            console.log(data) 
            renderHomePage(data) 
            renderHomePageEl(daily.data)
        })
    
}




const renderHomePage=date=>{
    mainEl.innerHTML=""
    mainEl.innerHTML=`<h1>Today is ${new Date(date.current.dt*1000).toLocaleDateString("rs")}</h1>
    <h2>Temperature is:${date.current.temp}</h2>
    <h3>Feels like:${date.current.feels_like}</h3>
    <img src="https://openweathermap.org/img/wn/${date.current.weather[0].icon}@2x.png"/>
    <h4>Description is:${date.current.weather[0].description}`
   
}

const renderAboutPage=mainEl=>{
    mainEl.innerHTML=""
    mainEl.innerHTML=`<h1>This is the About page</h1>
    <h2>`
}

homeBtn.addEventListener("click",()=>{
    fetchWetherApi()
})
aboutBtn.addEventListener("click",()=>{
    renderAboutPage(mainEl)
})

function renderHomePageEl(daily){
dailyCard.innerHTML=`<h1>${date.daily.dt}</h1>
<h2>${date.daily.temp.max}</h2>`
for (let day of daily){
   
}
}

