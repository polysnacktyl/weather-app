// GIVEN a weather dashboard with form inputs
// WHEN I search for a city




// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city




var getCity = document.getElementById("citySearch")
var showWeather = document.getElementById("weatherBox");
var fetchButton = document.getElementById("showTheWeather");
var cityListEl = $('#cityList');


function knowCity() {
    event.preventDefault();
    var city = document.querySelector('#inlineFormInputCity').value.replace(/\s/g, "");
    var cityListEl = $('#cityList').value;
    console.log(city)

    cityListEl.append('<li>' + city + '</li>');


      buildApiUrl()
}

// appendCityList
// // create Element
// // add content 
// // append to document 


function buildApiUrl() {
    var apiUrlA = 'https://api.openweathermap.org/data/2.5/weather?q='
    var apiUrlB = '&appid=5e396ffdb012177df336e70811fd23a0'
    var city = document.querySelector('#inlineFormInputCity').value.trim();
    var apiUrl = apiUrlA.concat(city, apiUrlB);
    console.log(apiUrl)


    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].url);
            }
        });

}


fetchButton.addEventListener('click', knowCity)

