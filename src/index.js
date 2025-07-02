function displayWeatherData(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  currentTempDisplay.innerHTML = currentTemp;
  let cityNameDisplay = response.data.city;
  cityElement.innerHTML = cityNameDisplay;
  //console.log(response.data.city);
}
function citySearchSubmit(event) {
  event.preventDefault();
  let cityEntered = searchInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityEntered}&key=18o7a0b8f4af4db5fa386d3ft8f43fea&units=imperial`;
  axios.get(apiUrl).then(displayWeatherData);
}
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let currentTempDisplay = document.querySelector("#current-tepm-display");
let cityElement = document.querySelector("#display-city");
searchForm.addEventListener("submit", citySearchSubmit);

//let apiKey = "18o7a0b8f4af4db5fa386d3ft8f43fea";
