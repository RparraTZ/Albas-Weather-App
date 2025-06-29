function citySearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#display-city");
  cityElement.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearchSubmit);
let apiKey=18o7a0b8f4af4db5fa386d3ft8f43fea