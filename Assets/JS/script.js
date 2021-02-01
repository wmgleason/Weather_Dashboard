$$( document ).ready(function() {
  console.log( "ready!" );
});
const form = document.querySelector(".top-banner form");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
var submitBtn = document.querySelector("#searchweather");
var outputArea = document.querySelector("#output");
let input = document.querySelector(".top-banner input");

function getWeather() {
let inputVal = input.value;
let url="http://api.openweathermap.org/data/2.5/weather?q=" + inputVal + "&appid=0ca33d0294b3d8458a733eb1abbf9384";
fetch(url,{method: 'GET'})
  .then(response => response.json())
  .then(data => outputArea.value = JSON.stringify(data));
}




