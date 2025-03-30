const apiKey = "95a7d59ecb7bec675f895546c96c43d3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city){

    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".errorMessage").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"<sup>o</sup>c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/p";

        if(data.weather[0].main == "Clouds"){
            document.querySelector(".weather-icon").src = "images/clouds.png";
        } 
        else if(data.weather[0].main == "Rain"){
            document.querySelector(".weather-icon").src = "images/rain.png";
        }
        else if(data.weather[0].main == "Clear"){
            document.querySelector(".weather-icon").src = "images/clear.png";
        }
        else if(data.weather[0].main == "Mist"){
            document.querySelector(".weather-icon").src = "images/mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            document.querySelector(".weather-icon").src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Snow"){
            document.querySelector(".weather-icon").src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".errorMessage").style.display = "none";

    }
}

searchButton.addEventListener("click",() =>{
    checkWeather(searchBox.value);
})
