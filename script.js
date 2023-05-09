const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click",function(){
    let Url = fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityname.value +"&appid=8de6f39c598dd7a4855d7b5babcd6387&units=metric");

    Url.then((value1)=>{
        return value1.json()
    }).then((value2)=>{
        let temp = value2.main.temp;
        let feelsLike = value2.main.feels_like;
        let min_temp = value2.main.temp_min;
        let max_temp = value2.main.temp_max;
        let pressure = value2.main.pressure;
        let humidity = value2.main.humidity;
        let description = value2.weather[0].description;

        document.getElementById("name").innerHTML = cityname.value;

        
    document.getElementById("city_temp").innerHTML = "<b>Temperature : </b>"+temp+"\u00B0C";
    document.getElementById("city_feels").innerHTML = "<b>Feels Like : </b>"+feelsLike+"\u00B0C";
    document.getElementById("city_minTemp").innerHTML = "<b>Min Temperature : </b>"+min_temp+"\u00B0C";
    document.getElementById("city_maxTemp").innerHTML = "<b>Max Temperature : </b>"+max_temp+"\u00B0C";
    document.getElementById("city_pressure").innerHTML = "<b>Pressure : </b>"+ pressure;
    document.getElementById("city_humidity").innerHTML = "<b>Humidity : </b>"+humidity;
    document.getElementById("city_desc").innerHTML = "<b>Description : </b>"+description;

    })

}) 