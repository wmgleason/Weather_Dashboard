var cities = [];

var cityFormEl=document.querySelector("#citySearchForm");
var cityInputEl=document.querySelector("#city");
var weatherContainerEl=document.querySelector("#currentWeatherContainer");
var citySearchInputEl = document.querySelector("#searchedCity");
var forecastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#fiveDayContainer");
var pastSearchButtonEl = document.querySelector("#pastSearchButtons");

var formSubmit = function(event){
    event.preventDefault();
    var city = cityInputEl.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInputEl.value = "";
    } else{
        alert("Please enter a valid city name.");
    }
    saveSearch();
    pastSearch(city);
}