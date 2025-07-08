function displayWeatherData(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let cityNameDisplay = response.data.city;
  let currentConditionDesc = response.data.condition.description;
  let currentHumidity = response.data.temperature.humidity;
  let currentWindSpeed = response.data.wind.speed;
  let daynTimeElement = document.querySelector("#dayTimeElement");
  let timestamp = response.data.time * 1000;
  let date = new Date(timestamp);
  let iconElement = document.querySelector("#icon");

  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-weather-icon" />`;
  currentTempDisplay.innerHTML = currentTemp;
  cityElement.innerHTML = cityNameDisplay;
  descriptionElement.innerHTML = currentConditionDesc;
  humidityRate.innerHTML = `${currentHumidity} %`;
  windSpeed.innerHTML = `${currentWindSpeed} mph`;
  daynTimeElement.innerHTML = formattedDate(date);
}
function formattedDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayNames[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hour}:${minutes},`;
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
let searchForm = document.querySelector("#search-form");
let currentTempDisplay = document.querySelector("#current-tepm-display");
let cityElement = document.querySelector("#display-city");
let descriptionElement = document.querySelector("#description");
let humidityRate = document.querySelector("#humidity-unit");
let windSpeed = document.querySelector("#wind-speed");

searchForm.addEventListener("submit", handleSearchSubmit);
