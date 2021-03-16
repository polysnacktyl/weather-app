
var showWeather = document.getElementById("weatherBox");
var fetchButton = document.getElementById("showTheWeather");




    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=&appid=5e396ffdb012177df336e70811fd23a0';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);


            // for (var i = 0; i < data.length; i++) {
            //     var theWeather = document.createElement('h1');
            //     theWeather.textContent = data[i].main;
            //     showWeather.append(theWeather);
            //     console.log(data[i].url);
            // }
        });


