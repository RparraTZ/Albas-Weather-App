function displayWeatherData(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  currentTempDisplay.innerHTML = currentTemp;
  let cityNameDisplay = response.data.city;
  cityElement.innerHTML = cityNameDisplay;
  let currentConditionDesc = response.data.condition.description;
  let currentHumidity = response.data.temperature.humidity;
  let currentWindSpeed = response.data.wind.speed;
  descriptionElement.innerHTML = currentConditionDesc;
  humidityRate.innerHTML = `${currentHumidity} %`;
  windSpeed.innerHTML = `${currentWindSpeed} mph`;
  formatDate(response.data.time);
}
function searchCity(city) {
  let apiKey = "18o7a0b8f4af4db5fa386d3ft8f43fea";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherData);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}
function formatDate(date) {
  now = new date();
  day = now.getDay();
  console.log(day);
  //let now=

  //let dayNames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
let searchForm = document.querySelector("#search-form");
let currentTempDisplay = document.querySelector("#current-tepm-display");
let cityElement = document.querySelector("#display-city");
let descriptionElement = document.querySelector("#description");
let humidityRate = document.querySelector("#humidity-unit");
let windSpeed = document.querySelector("#wind-speed");
//console.log(windSpeed);
searchForm.addEventListener("submit", handleSearchSubmit);
