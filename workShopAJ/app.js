console.log("it works")


apiBtn=document.querySelector(".btn")
homeBtn=document.querySelector(".home-btn")
aboutBtn=document.querySelector(".about-btn")
mainEl=document.querySelector(".main")
dailyCard=document.querySelector(".daily-card")


// const WETH_API="https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"

// function fetchWetherApi(){
   
//         fetch(WETH_API)
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data) 
//             renderHomePage(data) 
            
//         })
    
// }




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

function renderHomePageEl(data){

for (let day of data.daily){
    dailyCard.innerHTML+=`<br/>
    <ol>${new Date(day.dt*1000).toLocaleDateString("rs")}</ol>
    <br/>
    Temp Min is:${day.temp.min}
     <br/>
    Temp Max is:${day.temp.max}
    <br/>
    Today humidity is:${day.humidity}% 
    <br/>
    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"/>
    <br/>
    description :${day.weather[0].description}
    `
}

}

apiBtn.addEventListener("click",()=>{
    fetch(WETH_API)
        .then(res=>res.json())
        .then(data=>{
           renderHomePageEl(data)
        })
})

 function renderHomeHourly(data){
    for (let hour of data.hourly){
        dailyCard.innerHTML=`<ol>${new Date(hour.dt*1000).toLocaleDateString("rs")}</ol>
        Hour is:${hour}
    <br/>
        Temp  is:${hour.temp}
        <br/>
        Feels like:${hour.feels_like}
        <br/>
        Today humidity is:${hour.humidity}% 
        <img src="http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png"/>
        <br/>
        description :${hour.weather[0].description}`
    }
 }

 aboutBtn.addEventListener("click",()=>{
    fetch(WETH_API)
        .then(res=>res.json())
        .then(data=>{
           renderHomeHourly(data)
        })
 })