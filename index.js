
const appKey="7ca9fe5923bf8ccdcbf1dac5a37d93e8";
const appUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchT=document.getElementById("search-space");
const searchB=document.getElementById("search-btn");
const weatherI=document.getElementById("clear-img");

async function checkWeather(city){
    const response=await fetch(appUrl+city+`&appid=${appKey}`);
    
    if (response.status=="404"){
        document.getElementById("para").style.display="block";
        document.getElementById("weather").style.display="none";
    }

    else{
    var data=await response.json();
    
    document.getElementById("head-1").innerHTML=Math.round(data.main.temp)+"°C";
    document.getElementById("hum").innerHTML=data.main.humidity+"%";
    document.getElementById("wind").innerHTML=data.wind.speed+"km/h";
    document.getElementById("head-2").innerHTML=searchT.value;

    if(data.weather[0].main=="Clouds"){
        weatherI.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherI.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherI.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherI.src="images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherI.src="images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherI.src="images/snow.png";
    }
    
    document.getElementById("para").style.display="none";
        document.getElementById("weather").style.display="block";
    
    }
}




searchB.addEventListener("click",function(){
    checkWeather(searchT.value);
})