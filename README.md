Weather App

This is a simple weather application built using **HTML, CSS, and JavaScript**.
The app fetches **real-time weather information** for any city entered by the user and displays details such as temperature, weather condition, humidity, and wind speed.

This project is created as a **learning / mini-project** to understand how APIs work with frontend web technologies.


Features

* Search weather by **city name**
* Displays:

  * Temperature (°C)
  * Weather condition
  * Humidity
  * Wind speed
* Clean and responsive UI
* Uses real-time data from **WeatherAPI.com**



 Technologies Used

* **HTML** – Structure of the website
* **CSS** – Styling and layout
* **JavaScript** – Logic and API integration
* **WeatherAPI.com** – Real-time weather data source



API Key Setup (Important)

This project uses **WeatherAPI.com**, which requires an API key.

For security reasons, the API key is **not included** in this repository.

### How to add your API key:

1. Create a free account at **[https://www.weatherapi.com/](https://www.weatherapi.com/)**
2. Get your API key from the dashboard
3. Open the file `script.js`
4. Replace this line:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

with your own API key:

```js
const API_KEY = "your_actual_api_key";
```

5. Save the file


How to Run the Project

1. Clone or download this repository
2. Add your API key in `script.js` (as explained above)
3. Open `index.html` in any modern web browser
4. Enter a city name and click **Search**

---

Note
* This is a **frontend-only project**
* The API key is visible in JavaScript during runtime, which is acceptable for learning and academic purposes
* For production-level applications, API keys should be handled on the backend

This project is for **educational purposes only**.
