console.log("this works");
const API_KEY = config.WEATHER_API_KEY;
fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${WEATHER_API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));

    function getWeatherData() {
  // fetch request goes in here :-)
}

getWeatherData()