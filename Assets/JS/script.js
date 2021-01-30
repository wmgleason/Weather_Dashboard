$( document ).ready(function() {
    console.log( "ready!" );
});
const form = document.querySelector(".top-banner form");
let input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", e => {
  e.preventDefault();
    let inputVal = input.value;
});
const apiKey = "0ca33d0294b3d8458a733eb1abbf9384";
const inputVal = input.value;
 
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const url="api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
 fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;
    const icon = `https://openweathermap.org/img/wn/${
      weather[0]["icon"]
    }@2x.png`;
  })
//   .catch(() => {
//     msg.textContent = "Please enter a valid city name.";
//   });
// Build the list items with the return from openweather
const li = document.createElement("li");
li.classList.add("city");
const markup = `
  <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
  </h2>
  <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  </div>
  <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
  </figure>
`;
li.innerHTML = markup;
list.appendChild(li);
msg.textContent = "Enter a valid city name.";
form.reset();
input.focus();
