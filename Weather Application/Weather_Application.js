const API_KEY = '526f1ac5cce94c390f972b13c12309ce';
const city= 'doncaster';
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + API_KEY;

const weather = document.querySelector("main");
const get_Weather = async() => {
    const response = await fetch(API_URL);
    const data = await response.json();
     
    console.log(data);
}
get_Weather();
