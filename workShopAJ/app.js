console.log("it works")


apiBtn = document.querySelector(".btn")
homeBtn = document.querySelector(".home-btn")
aboutBtn = document.querySelector(".about-btn")
mainEl = document.querySelector(".main")
dailyCard = document.querySelector(".daily-card")


// const WETH_API="https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"

// function fetchWetherApi(){

//         fetch(WETH_API)
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data) 
//             renderHomePage(data) 

//         })

// }




// const renderHomePage = date => {
//     mainEl.innerHTML = ""
//     mainEl.innerHTML = `<h1>Today is ${new Date(date.current.dt * 1000).toLocaleDateString("rs")}</h1>
//     <h2>Temperature is:${date.current.temp}</h2>
//     <h3>Feels like:${date.current.feels_like}</h3>
//     <img src="https://openweathermap.org/img/wn/${date.current.weather[0].icon}@2x.png"/>
//     <h4>Description is:${date.current.weather[0].description}`

// }

// const renderAboutPage = mainEl => {
//     mainEl.innerHTML = ""
//     mainEl.innerHTML = `<h1>This is the About page</h1>
//     <h2>`
// }

// homeBtn.addEventListener("click", () => {
//     renderHomePage(WETH_API)})


// function renderHomePageEl(WETH_API) {

//     for (let day of WETH_API.daily) {
//         dailyCard.innerHTML += `<br/>
//     <ol>${new Date(day.dt * 1000).toLocaleDateString("rs")}</ol>
//     <br/>
//     Temp Min is:${day.temp.min}
//      <br/>
//     Temp Max is:${day.temp.max}
//     <br/>
//     Today humidity is:${day.humidity}% 
//     <br/>
//     <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"/>
//     <br/>
//     description :${day.weather[0].description}
//     `
//     }

// }

// apiBtn.addEventListener("click", () => {
//     renderHomePageEl(WETH_API)
//         })


// function renderHomeHourly(WETH_API) {
//     for (let hour of WETH_API.hourly) {
//         dailyCard.innerHTML = `<ol>${new Date(hour.getHours()).toLocaleDateString("rs")}</ol>
        
//     <br/>
//         Temp  is:${hour.temp}
//         <br/>
//         Feels like:${hour.feels_like}
//         <br/>
//         Today humidity is:${hour.humidity}% 
//         <img src="http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png"/>
//         <br/>
//         description :${hour.weather[0].description}`
//     }
// }

// aboutBtn.addEventListener("click", () => {
    
// renderHomeHourly(WETH_API)
//  })




   
const fetchDummyData=()=>{
    const dummyData={ "lat": 41.9965,
    "lon": 21.4314,
    "timezone": "Europe/Skopje",
    "timezone_offset": 3600,
    "current": {
        "dt": 1675794895,
        "sunrise": 1675748469,
        "sunset": 1675785340,
        "temp": -3.1,
        "feels_like": -9.19,
        "pressure": 1035,
        "humidity": 63,
        "dew_point": -8.47,
        "uvi": 0,
        "clouds": 20,
        "visibility": 10000,
        "wind_speed": 5.66,
        "wind_deg": 30,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ]
    },
    "hourly": [
        {
            "dt": 1675792800,
            "temp": -3.05,
            "feels_like": -6.27,
            "pressure": 1035,
            "humidity": 62,
            "dew_point": -8.61,
            "uvi": 0,
            "clouds": 24,
            "visibility": 10000,
            "wind_speed": 2.2,
            "wind_deg": 341,
            "wind_gust": 3,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675796400,
            "temp": -3.1,
            "feels_like": -5.91,
            "pressure": 1035,
            "humidity": 63,
            "dew_point": -8.47,
            "uvi": 0,
            "clouds": 20,
            "visibility": 10000,
            "wind_speed": 1.89,
            "wind_deg": 333,
            "wind_gust": 2.42,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675800000,
            "temp": -3.13,
            "feels_like": -5.25,
            "pressure": 1035,
            "humidity": 64,
            "dew_point": -8.32,
            "uvi": 0,
            "clouds": 16,
            "visibility": 10000,
            "wind_speed": 1.46,
            "wind_deg": 319,
            "wind_gust": 1.72,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675803600,
            "temp": -3.18,
            "feels_like": -3.18,
            "pressure": 1036,
            "humidity": 64,
            "dew_point": -8.37,
            "uvi": 0,
            "clouds": 12,
            "visibility": 10000,
            "wind_speed": 1.27,
            "wind_deg": 313,
            "wind_gust": 1.44,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675807200,
            "temp": -3.24,
            "feels_like": -3.24,
            "pressure": 1036,
            "humidity": 65,
            "dew_point": -8.25,
            "uvi": 0,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 1.24,
            "wind_deg": 310,
            "wind_gust": 1.34,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675810800,
            "temp": -3.32,
            "feels_like": -3.32,
            "pressure": 1037,
            "humidity": 65,
            "dew_point": -8.33,
            "uvi": 0,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 1.21,
            "wind_deg": 311,
            "wind_gust": 1.3,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675814400,
            "temp": -3.44,
            "feels_like": -3.44,
            "pressure": 1037,
            "humidity": 65,
            "dew_point": -10.05,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1,
            "wind_deg": 311,
            "wind_gust": 1.11,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675818000,
            "temp": -3.52,
            "feels_like": -3.52,
            "pressure": 1037,
            "humidity": 66,
            "dew_point": -10.05,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.91,
            "wind_deg": 327,
            "wind_gust": 1.01,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675821600,
            "temp": -3.61,
            "feels_like": -3.61,
            "pressure": 1037,
            "humidity": 66,
            "dew_point": -10.05,
            "uvi": 0,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 0.73,
            "wind_deg": 350,
            "wind_gust": 0.86,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675825200,
            "temp": -3.68,
            "feels_like": -3.68,
            "pressure": 1038,
            "humidity": 67,
            "dew_point": -10.01,
            "uvi": 0,
            "clouds": 5,
            "visibility": 10000,
            "wind_speed": 0.6,
            "wind_deg": 358,
            "wind_gust": 0.74,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675828800,
            "temp": -3.75,
            "feels_like": -3.75,
            "pressure": 1038,
            "humidity": 67,
            "dew_point": -10.03,
            "uvi": 0,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 0.64,
            "wind_deg": 340,
            "wind_gust": 0.79,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675832400,
            "temp": -3.71,
            "feels_like": -3.71,
            "pressure": 1038,
            "humidity": 67,
            "dew_point": -10.09,
            "uvi": 0,
            "clouds": 15,
            "visibility": 10000,
            "wind_speed": 0.63,
            "wind_deg": 323,
            "wind_gust": 1.12,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675836000,
            "temp": -3.43,
            "feels_like": -3.43,
            "pressure": 1039,
            "humidity": 65,
            "dew_point": -10.09,
            "uvi": 0,
            "clouds": 29,
            "visibility": 10000,
            "wind_speed": 0.71,
            "wind_deg": 309,
            "wind_gust": 1.26,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675839600,
            "temp": -2.74,
            "feels_like": -2.74,
            "pressure": 1039,
            "humidity": 60,
            "dew_point": -10.44,
            "uvi": 0.45,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 1.03,
            "wind_deg": 349,
            "wind_gust": 1.54,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675843200,
            "temp": -1.71,
            "feels_like": -1.71,
            "pressure": 1039,
            "humidity": 53,
            "dew_point": -10.98,
            "uvi": 1.11,
            "clouds": 80,
            "visibility": 10000,
            "wind_speed": 1.21,
            "wind_deg": 16,
            "wind_gust": 1.62,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675846800,
            "temp": -0.59,
            "feels_like": -0.59,
            "pressure": 1039,
            "humidity": 47,
            "dew_point": -11.58,
            "uvi": 1.84,
            "clouds": 62,
            "visibility": 10000,
            "wind_speed": 1.06,
            "wind_deg": 38,
            "wind_gust": 1.44,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675850400,
            "temp": 0.4,
            "feels_like": 0.4,
            "pressure": 1039,
            "humidity": 42,
            "dew_point": -11.85,
            "uvi": 2.32,
            "clouds": 52,
            "visibility": 10000,
            "wind_speed": 1.06,
            "wind_deg": 62,
            "wind_gust": 1.58,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675854000,
            "temp": 1.22,
            "feels_like": 1.22,
            "pressure": 1039,
            "humidity": 39,
            "dew_point": -12.02,
            "uvi": 2.37,
            "clouds": 47,
            "visibility": 10000,
            "wind_speed": 1.28,
            "wind_deg": 67,
            "wind_gust": 1.71,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675857600,
            "temp": 1.7,
            "feels_like": -0.46,
            "pressure": 1038,
            "humidity": 37,
            "dew_point": -12.22,
            "uvi": 1.93,
            "clouds": 44,
            "visibility": 10000,
            "wind_speed": 1.99,
            "wind_deg": 70,
            "wind_gust": 2.28,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675861200,
            "temp": 2.09,
            "feels_like": -0.25,
            "pressure": 1038,
            "humidity": 36,
            "dew_point": -12.25,
            "uvi": 1.31,
            "clouds": 21,
            "visibility": 10000,
            "wind_speed": 2.21,
            "wind_deg": 84,
            "wind_gust": 2.56,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675864800,
            "temp": 2.15,
            "feels_like": -0.08,
            "pressure": 1037,
            "humidity": 37,
            "dew_point": -12.03,
            "uvi": 0.59,
            "clouds": 17,
            "visibility": 10000,
            "wind_speed": 2.11,
            "wind_deg": 88,
            "wind_gust": 2.93,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675868400,
            "temp": 1.7,
            "feels_like": 0.2,
            "pressure": 1037,
            "humidity": 40,
            "dew_point": -11.26,
            "uvi": 0.15,
            "clouds": 15,
            "visibility": 10000,
            "wind_speed": 1.49,
            "wind_deg": 97,
            "wind_gust": 2.17,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675872000,
            "temp": -0.58,
            "feels_like": -0.58,
            "pressure": 1037,
            "humidity": 47,
            "dew_point": -11.37,
            "uvi": 0,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 0.73,
            "wind_deg": 156,
            "wind_gust": 0.78,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675875600,
            "temp": -1.13,
            "feels_like": -1.13,
            "pressure": 1038,
            "humidity": 49,
            "dew_point": -11.38,
            "uvi": 0,
            "clouds": 12,
            "visibility": 10000,
            "wind_speed": 0.46,
            "wind_deg": 198,
            "wind_gust": 0.54,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675879200,
            "temp": -1.48,
            "feels_like": -1.48,
            "pressure": 1038,
            "humidity": 51,
            "dew_point": -11.23,
            "uvi": 0,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 0.37,
            "wind_deg": 346,
            "wind_gust": 0.44,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675882800,
            "temp": -1.84,
            "feels_like": -1.84,
            "pressure": 1039,
            "humidity": 54,
            "dew_point": -10.85,
            "uvi": 0,
            "clouds": 23,
            "visibility": 10000,
            "wind_speed": 0.95,
            "wind_deg": 30,
            "wind_gust": 0.93,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675886400,
            "temp": -2.19,
            "feels_like": -2.19,
            "pressure": 1039,
            "humidity": 58,
            "dew_point": -10.38,
            "uvi": 0,
            "clouds": 19,
            "visibility": 10000,
            "wind_speed": 1.24,
            "wind_deg": 52,
            "wind_gust": 1.26,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675890000,
            "temp": -2.5,
            "feels_like": -2.5,
            "pressure": 1040,
            "humidity": 61,
            "dew_point": -9.98,
            "uvi": 0,
            "clouds": 15,
            "visibility": 10000,
            "wind_speed": 1.26,
            "wind_deg": 74,
            "wind_gust": 1.31,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675893600,
            "temp": -2.75,
            "feels_like": -2.75,
            "pressure": 1040,
            "humidity": 63,
            "dew_point": -9.92,
            "uvi": 0,
            "clouds": 12,
            "visibility": 10000,
            "wind_speed": 0.95,
            "wind_deg": 96,
            "wind_gust": 1,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675897200,
            "temp": -2.93,
            "feels_like": -2.93,
            "pressure": 1040,
            "humidity": 64,
            "dew_point": -9.92,
            "uvi": 0,
            "clouds": 11,
            "visibility": 10000,
            "wind_speed": 1.12,
            "wind_deg": 85,
            "wind_gust": 1.15,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675900800,
            "temp": -3.14,
            "feels_like": -3.14,
            "pressure": 1040,
            "humidity": 65,
            "dew_point": -9.92,
            "uvi": 0,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 1.07,
            "wind_deg": 94,
            "wind_gust": 1.12,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675904400,
            "temp": -3.29,
            "feels_like": -3.29,
            "pressure": 1040,
            "humidity": 65,
            "dew_point": -10.09,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.67,
            "wind_deg": 116,
            "wind_gust": 0.71,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675908000,
            "temp": -3.39,
            "feels_like": -3.39,
            "pressure": 1039,
            "humidity": 64,
            "dew_point": -10.16,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.44,
            "wind_deg": 84,
            "wind_gust": 0.48,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675911600,
            "temp": -3.5,
            "feels_like": -3.5,
            "pressure": 1039,
            "humidity": 64,
            "dew_point": -10.34,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.68,
            "wind_deg": 103,
            "wind_gust": 0.73,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675915200,
            "temp": -3.61,
            "feels_like": -3.61,
            "pressure": 1039,
            "humidity": 64,
            "dew_point": -10.65,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.42,
            "wind_deg": 150,
            "wind_gust": 0.56,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675918800,
            "temp": -3.64,
            "feels_like": -3.64,
            "pressure": 1039,
            "humidity": 63,
            "dew_point": -10.75,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.34,
            "wind_deg": 276,
            "wind_gust": 0.45,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675922400,
            "temp": -3.49,
            "feels_like": -3.49,
            "pressure": 1039,
            "humidity": 62,
            "dew_point": -10.85,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.54,
            "wind_deg": 53,
            "wind_gust": 0.51,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675926000,
            "temp": -2.39,
            "feels_like": -2.39,
            "pressure": 1039,
            "humidity": 55,
            "dew_point": -11.1,
            "uvi": 0.48,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 0.79,
            "wind_deg": 103,
            "wind_gust": 0.72,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675929600,
            "temp": -1.22,
            "feels_like": -1.22,
            "pressure": 1039,
            "humidity": 49,
            "dew_point": -11.39,
            "uvi": 1.18,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 0.82,
            "wind_deg": 122,
            "wind_gust": 0.83,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675933200,
            "temp": -0.12,
            "feels_like": -0.12,
            "pressure": 1038,
            "humidity": 44,
            "dew_point": -11.71,
            "uvi": 1.96,
            "clouds": 26,
            "visibility": 10000,
            "wind_speed": 1.16,
            "wind_deg": 84,
            "wind_gust": 1.03,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675936800,
            "temp": 0.85,
            "feels_like": 0.85,
            "pressure": 1038,
            "humidity": 41,
            "dew_point": -11.86,
            "uvi": 2.6,
            "clouds": 44,
            "visibility": 10000,
            "wind_speed": 1.29,
            "wind_deg": 81,
            "wind_gust": 1.08,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675940400,
            "temp": 1.71,
            "feels_like": -0.09,
            "pressure": 1037,
            "humidity": 38,
            "dew_point": -11.94,
            "uvi": 2.66,
            "clouds": 42,
            "visibility": 10000,
            "wind_speed": 1.7,
            "wind_deg": 91,
            "wind_gust": 1.62,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675944000,
            "temp": 2.34,
            "feels_like": 0.64,
            "pressure": 1036,
            "humidity": 37,
            "dew_point": -11.79,
            "uvi": 2.16,
            "clouds": 37,
            "visibility": 10000,
            "wind_speed": 1.7,
            "wind_deg": 78,
            "wind_gust": 1.43,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675947600,
            "temp": 2.67,
            "feels_like": 0.47,
            "pressure": 1036,
            "humidity": 37,
            "dew_point": -11.55,
            "uvi": 1.38,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 2.17,
            "wind_deg": 83,
            "wind_gust": 1.88,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675951200,
            "temp": 2.67,
            "feels_like": 0.68,
            "pressure": 1035,
            "humidity": 37,
            "dew_point": -11.3,
            "uvi": 0.63,
            "clouds": 92,
            "visibility": 10000,
            "wind_speed": 1.98,
            "wind_deg": 89,
            "wind_gust": 1.95,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675954800,
            "temp": 2.05,
            "feels_like": 0.58,
            "pressure": 1035,
            "humidity": 42,
            "dew_point": -10.37,
            "uvi": 0.16,
            "clouds": 88,
            "visibility": 10000,
            "wind_speed": 1.5,
            "wind_deg": 80,
            "wind_gust": 1.64,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675958400,
            "temp": -0.18,
            "feels_like": -0.18,
            "pressure": 1036,
            "humidity": 48,
            "dew_point": -10.77,
            "uvi": 0,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 0.84,
            "wind_deg": 85,
            "wind_gust": 0.86,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1675962000,
            "temp": -0.61,
            "feels_like": -0.61,
            "pressure": 1036,
            "humidity": 50,
            "dew_point": -10.78,
            "uvi": 0,
            "clouds": 93,
            "visibility": 10000,
            "wind_speed": 0.51,
            "wind_deg": 265,
            "wind_gust": 0.5,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        }
    ],
    "daily": [
        {
            "dt": 1675764000,
            "sunrise": 1675748469,
            "sunset": 1675785340,
            "moonrise": 1675791300,
            "moonset": 1675752600,
            "moon_phase": 0.55,
            "temp": {
                "day": 0.85,
                "min": -3.98,
                "max": 2.05,
                "night": -3.24,
                "eve": -2.17,
                "morn": -3.78
            },
            "feels_like": {
                "day": -1.99,
                "night": -3.24,
                "eve": -5.57,
                "morn": -6.39
            },
            "pressure": 1036,
            "humidity": 41,
            "dew_point": -11.91,
            "wind_speed": 4.47,
            "wind_deg": 8,
            "wind_gust": 4.86,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 12,
            "pop": 0,
            "uvi": 2.38
        },
        {
            "dt": 1675850400,
            "sunrise": 1675834798,
            "sunset": 1675871818,
            "moonrise": 1675881480,
            "moonset": 1675840260,
            "moon_phase": 0.58,
            "temp": {
                "day": 0.4,
                "min": -3.75,
                "max": 2.15,
                "night": -2.75,
                "eve": -0.58,
                "morn": -3.75
            },
            "feels_like": {
                "day": 0.4,
                "night": -2.75,
                "eve": -0.58,
                "morn": -3.75
            },
            "pressure": 1039,
            "humidity": 42,
            "dew_point": -11.85,
            "wind_speed": 2.21,
            "wind_deg": 84,
            "wind_gust": 2.93,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 52,
            "pop": 0,
            "uvi": 2.37
        },
        {
            "dt": 1675936800,
            "sunrise": 1675921127,
            "sunset": 1675958296,
            "moonrise": 1675971600,
            "moonset": 1675927800,
            "moon_phase": 0.61,
            "temp": {
                "day": 0.85,
                "min": -3.64,
                "max": 2.67,
                "night": -1.63,
                "eve": -0.18,
                "morn": -3.61
            },
            "feels_like": {
                "day": 0.85,
                "night": -1.63,
                "eve": -0.18,
                "morn": -3.61
            },
            "pressure": 1038,
            "humidity": 41,
            "dew_point": -11.86,
            "wind_speed": 2.17,
            "wind_deg": 83,
            "wind_gust": 1.95,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": 44,
            "pop": 0,
            "uvi": 2.66
        },
        {
            "dt": 1676023200,
            "sunrise": 1676007453,
            "sunset": 1676044774,
            "moonrise": 1676061840,
            "moonset": 1676015400,
            "moon_phase": 0.64,
            "temp": {
                "day": 3.53,
                "min": -2.14,
                "max": 6.02,
                "night": -0.76,
                "eve": 2.1,
                "morn": -2.12
            },
            "feels_like": {
                "day": 3.53,
                "night": -0.76,
                "eve": 0.76,
                "morn": -2.12
            },
            "pressure": 1036,
            "humidity": 40,
            "dew_point": -9.69,
            "wind_speed": 1.73,
            "wind_deg": 347,
            "wind_gust": 2.38,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 2.59
        },
        {
            "dt": 1676109600,
            "sunrise": 1676093778,
            "sunset": 1676131252,
            "moonrise": 1676152200,
            "moonset": 1676103060,
            "moon_phase": 0.68,
            "temp": {
                "day": 3.87,
                "min": -1.78,
                "max": 6.14,
                "night": 1.19,
                "eve": 2.66,
                "morn": -1.6
            },
            "feels_like": {
                "day": 3.87,
                "night": 1.19,
                "eve": 2.66,
                "morn": -1.6
            },
            "pressure": 1036,
            "humidity": 33,
            "dew_point": -11.7,
            "wind_speed": 0.87,
            "wind_deg": 314,
            "wind_gust": 1.54,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 2.55
        },
        {
            "dt": 1676196000,
            "sunrise": 1676180102,
            "sunset": 1676217729,
            "moonrise": 1676242740,
            "moonset": 1676190780,
            "moon_phase": 0.71,
            "temp": {
                "day": 5.89,
                "min": 0.7,
                "max": 6.71,
                "night": 2.61,
                "eve": 4.93,
                "morn": 0.88
            },
            "feels_like": {
                "day": 5.89,
                "night": 2.61,
                "eve": 3.91,
                "morn": 0.88
            },
            "pressure": 1029,
            "humidity": 43,
            "dew_point": -6.72,
            "wind_speed": 1.47,
            "wind_deg": 93,
            "wind_gust": 1.85,
            "weather": [
                {
                    "id": 616,
                    "main": "Snow",
                    "description": "rain and snow",
                    "icon": "13d"
                }
            ],
            "clouds": 100,
            "pop": 0.51,
            "rain": 0.31,
            "snow": 0.35,
            "uvi": 1.96
        },
        {
            "dt": 1676282400,
            "sunrise": 1676266425,
            "sunset": 1676304207,
            "moonrise": 0,
            "moonset": 1676278800,
            "moon_phase": 0.75,
            "temp": {
                "day": 4.96,
                "min": 0.78,
                "max": 7.12,
                "night": 2.02,
                "eve": 7.03,
                "morn": 1.45
            },
            "feels_like": {
                "day": 4.96,
                "night": 2.02,
                "eve": 5.83,
                "morn": 1.45
            },
            "pressure": 1037,
            "humidity": 65,
            "dew_point": -2.09,
            "wind_speed": 1.9,
            "wind_deg": 16,
            "wind_gust": 1.36,
            "weather": [
                {
                    "id": 616,
                    "main": "Snow",
                    "description": "rain and snow",
                    "icon": "13d"
                }
            ],
            "clouds": 78,
            "pop": 0.32,
            "rain": 0.14,
            "snow": 0.26,
            "uvi": 2
        },
        {
            "dt": 1676368800,
            "sunrise": 1676352746,
            "sunset": 1676390684,
            "moonrise": 1676333460,
            "moonset": 1676367180,
            "moon_phase": 0.78,
            "temp": {
                "day": 6.06,
                "min": 0.89,
                "max": 9.97,
                "night": 3.38,
                "eve": 9.75,
                "morn": 0.89
            },
            "feels_like": {
                "day": 6.06,
                "night": 3.38,
                "eve": 9.23,
                "morn": 0.89
            },
            "pressure": 1033,
            "humidity": 54,
            "dew_point": -3.35,
            "wind_speed": 1.63,
            "wind_deg": 24,
            "wind_gust": 2.31,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 12,
            "pop": 0,
            "uvi": 2
        }
    ],
    "alerts": [
        {
            "sender_name": "National Hydrometeorological Service - Republic of Macedonia",
            "event": "Wind",
            "start": 1675606440,
            "end": 1676920440,
            "description": "strong wind",
            "tags": [
                "Wind"
            ]
        }
    ]
}

    
    return new Promise((resolve,reject)=>{
        resolve(dummyData)
    })
}

const getData=async ()=>{
    const weatherData=await fetchDummyData()
    console.log(weatherData)
}
getData()