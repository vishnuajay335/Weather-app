/* API KEY
   Replace the value with your own key */
const API_KEY = "YOUR_API_KEY_HERE";        

/* Base URL for current weather data */
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

/* Selecting HTML elements by ID */
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const errorMessage = document.getElementById("errorMessage");

/* ================================
   EVENT LISTENER
   Runs when Search button is clicked
   ================================ */

searchBtn.addEventListener("click", getWeather);

/* ================================
   MAIN FUNCTION: getWeather()
   ================================ */

function getWeather() {
    const city = cityInput.value.trim();

    /* Input validation */
    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    /* Clear previous error */
    errorMessage.textContent = "";

    /* Build API request URL */
    const url = `${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`;

    /* Fetch data from Weather API */
    fetch(url)
        .then(response => {
            /* If city is invalid or request fails */
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            /* Update UI with fetched data */
            updateWeatherUI(data);
        })
        .catch(error => {
            /* Handle errors gracefully */
            errorMessage.textContent = "City not found. Try again.";
            clearWeatherUI();
        });
}

/* ================================
   UPDATE WEATHER DATA ON SCREEN
   ================================ */

function updateWeatherUI(data) {
    cityName.textContent = `${data.location.name}, ${data.location.country}`;
    temperature.textContent = `Temperature: ${data.current.temp_c} °C`;
    condition.textContent = `Condition: ${data.current.condition.text}`;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    wind.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
}

/* ================================
   CLEAR WEATHER DATA (on error)
   ================================ */

function clearWeatherUI() {
    cityName.textContent = "City Name";
    temperature.textContent = "Temperature: -- °C";
    condition.textContent = "Condition: --";
    humidity.textContent = "Humidity: --%";
    wind.textContent = "Wind Speed: --";
}
