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

  getForecast(response.data.city);
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
function getForecast(city) {
  let apiKey = "18o7a0b8f4af4db5fa386d3ft8f43fea";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}
function displayForecast(response) {
  let forecastHtml = "";
  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `<div class="weather-forecast-day">
            <div class="weather-forecast-date">${formatDay(day.time)}</div>
            <img src="${day.condition.icon_url}" class="weather-forecast-icon"/>
            <div class= "weather-forecast-temperatures">
            <div class= "weather-forecast-temperature-max">
            <strong>${Math.round(day.temperature.maximum)}°</strong>
            </div>
            <div class="weather-forecast-temperature-min">
           ${Math.round(day.temperature.minimum)}°</div>
            </div>
            </div>
            `;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
let currentTempDisplay = document.querySelector("#current-tepm-display");
let cityElement = document.querySelector("#display-city");
let descriptionElement = document.querySelector("#description");
let humidityRate = document.querySelector("#humidity-unit");
let windSpeed = document.querySelector("#wind-speed");

searchForm.addEventListener("submit", handleSearchSubmit);
searchCity("Ontario");
