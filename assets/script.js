
var getCity = document.getElementById("citySearch")
var showWeather = document.getElementById("weatherBox");
var fetchButton = document.getElementById("showTheWeather");


function knowCity() {
    event.preventDefault();
    var city = document.querySelector('#inlineFormInputCity').value.trim();
    console.log(city)

    buildApiUrl()
}

function buildApiUrl() {
    var apiUrlA = 'https://api.openweathermap.org/data/2.5/weather?q='
    var apiUrlB = '&appid=5e396ffdb012177df336e70811fd23a0'
    var city = document.querySelector('#inlineFormInputCity').value.trim();
    var apiUrl = apiUrlA.concat(city, apiUrlB);
    console.log(apiUrl)
}



var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=pittsburgh&appid=5e396ffdb012177df336e70811fd23a0';
var responseText = document.getElementById('response-text');

fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].url);
        }
    });




fetchButton.addEventListener('click', knowCity)

