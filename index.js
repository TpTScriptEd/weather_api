
// execute this function only when the page finished loading
$(function () {
  // when the form is submitted, get the city nams
  $('form').on('submit', function (event) {
    event.preventDefault();

    var userInput = $('input').val();
    var cities = userInput.split(',');

    for(var i = 0; i < cities.length; i++) {
      // inside the loop
      var cityName = cities[i];
      console.log(cityName);
    }
  });
});

function printWeather(response) {
  var element = $('<p>', {
    text: response.main.temp
  });

  $('.output').append(element);
}

function getWeather(cityName) {
  var url = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather' +
    '?appid=c2f2d170f6f6fc336058e9851edb828c' +
    '&q=' + cityName +
    '&units=imperial';

  $.get(url, printWeather);
}

