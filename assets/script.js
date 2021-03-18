// GIVEN a weather dashboard with form inputs
// WHEN I search for a city

//current: city name, date
//      icon representations of: temp, humidity, wind speed, uv index 
//                              uv index: color-coded for favorable/moderate/severe
//5 day forecast also with icon-ified current conditions, temp, humidity 


// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var Today = moment().format('MMMM Do YYYY');
$("#itsToday").text(Today);



var getCity = document.getElementById("citySearch")
var showWeather = document.getElementById("weatherBox");
var fetchButton = document.getElementById("showTheWeather");
var currentWeatherContainer = document.getElementById("currentWeather");
var searchedCities = document.getElementById("#searchedCities")



function knowCity() {
    event.preventDefault();
    var city = document.querySelector('#inlineFormInputCity').value.replace(/\s/g, "");
    // console.log(city);
    buildApi()
}

function buildApi() {
    var apiUrlA = 'https://api.openweathermap.org/data/2.5/weather?q='
    var apiUrlB = '&units=imperial&appid=5e396ffdb012177df336e70811fd23a0'
    var city = document.querySelector('#inlineFormInputCity').value.trim();
    var apiUrl = apiUrlA.concat(city, apiUrlB);
    console.log('apiUrl 1: ' + apiUrl)



    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.name + ', ' + Today);
            console.log(data.weather[0]);
            console.log(data.weather[1]);
            var cityName = document.createElement('li');
            var currentTemp = document.createElement('li');
            var humidity = document.createElement('li');
            var windSpeed = document.createElement('li');
            const location = {
                latitude: data.coord.lat,
                longitude: data.coord.lon,
                apiCityName: data.name
            }

            cityName.textContent = data.name + ", " + Today;
            currentTemp.textContent = "temperature: " + data.main.temp + "°";
            humidity.textContent = "humidity: " + data.main.humidity + "%";
            windSpeed.textContent = "wind speed: " + data.wind.speed + "mph";
            currentWeatherContainer.appendChild(cityName);
            currentWeatherContainer.appendChild(currentTemp);
            currentWeatherContainer.appendChild(humidity);
            currentWeatherContainer.appendChild(windSpeed);

            localStorage.setItem('coordz', JSON.stringify(location));
            var latLon = JSON.parse(localStorage.getItem('coordz'));
            // console.log(latLon);
            console.log(latLon.latitude);
            console.log(latLon.longitude);

            var uviApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latLon.latitude + '&lon=' + latLon.longitude + '&units=imperial&appid=5e396ffdb012177df336e70811fd23a0';
            console.log('apiUrl 2: ' + uviApi);

            fetch(uviApi)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                console.log('uv index: ' + data.current.uvi);
                console.log('5 day/day 1: ');
                console.log(data.daily[0]);
                
                var fiveDay1=document.createElement('li');
                fiveDay1.textContent = '5 day forecast, day 1: ' + data.daily[0].rain;
                currentWeatherContainer.appendChild(fiveDay1);

                var uvIndex=document.createElement('li');
                uvIndex.textContent = 'UV index: ' + data.current.uvi;
                currentWeatherContainer.appendChild(uvIndex);
            });
        


        }); 



}


geoWhatsit = 'https://www.mapquestapi.com/search/v4/place?location=40.4406%2C-79.9959&sort=distance&feedback=false&key=NLqGBYJ0IocGM0MsEFDjFCZ1Y1RlGOUC&circle=40.4406%2C-79.9959%2C10000&pageSize=25&page=1&q=restaurant';
fetch(geoWhatsit)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });





// var latLon = JSON.parse(localStorage.getItem('coordz'));
// console.log(latLon);


// var worldLocation = document.createElement('li');
// worldLocation.innerText = latLon;
// currentWeatherContainer.appendChild(worldLocation);



// pittsburgh = "https://api.openweathermap.org/data/2.5/onecall?lat=40.4406&lon=-79.9959&units=imperial&appid=5e396ffdb012177df336e70811fd23a0";
// fetch(pittsburgh)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         console.log("current temp: " + data.current.temp + "°");
//         console.log("humidity: " + data.current.humidity + "%")
//         console.log("wind speed: " + data.current.wind_speed + "mph");
//         console.log("uv index: " + data.current.uvi);
//     });


fetchButton.addEventListener('click', knowCity)

