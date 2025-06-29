function citySearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#display-city");
  cityElement.innerHTML = searchInput.value;
  let city = searchInput.value;
  return;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearchSubmit);
let apiKey = "18o7a0b8f4af4db5fa386d3ft8f43fea";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={}&key=18o7a0b8f4af4db5fa386d3ft8f43fea";
