$( document ).ready(function() {
    console.log( "ready!" );
});
const form = document.querySelector(".top-banner form");
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});
const apiKey = "a27300c8e5b95c30374f60076b5d41ac";
const inputVal = input.value;
 
const url="https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric";
 fetch(url)
  .then(response => response.json())
  .then(data => {

  })
  .catch(() => {
    msg.textContent = "Please enter a valid city name.";
  });
// Build the list items with the return from openweather
const { main, name, sys, weather } = data;
const icon = `https://openweathermap.org/img/wn/${
  weather[0]["icon"]
}@2x.png`;
 
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
// `;
li.innerHTML = markup;
list.appendChild(li);