const API_KEY = '1087c0cdbab717967eabaa9677eb647e';

function searchWeather() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    }
}

function fetchWeather(city) {
    // Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                updateCurrentWeather(data);
                fetchForecast(city);
            } else {
                alert("City not found. Please try again.");
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}

function updateCurrentWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    
    const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.getElementById('weatherIcon').src = weatherIcon;
}

function fetchForecast(city) {
    // Fetch 5-day forecast data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "200") {
                updateForecast(data);
            } else {
                alert("Unable to fetch forecast. Please try again.");
            }
        })
        .catch(error => console.error("Error fetching forecast data:", error));
}

function updateForecast(data) {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = ''; // Clear existing forecast data

    // Loop through 5-day forecast data
    for (let i = 0; i < data.list.length; i += 8) { // Data is returned in 3-hour intervals
        const forecast = data.list[i];
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString('en-GB', { weekday: 'long' });
        const icon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
        const temp = Math.round(forecast.main.temp);

        const forecastElement = document.createElement('div');
        forecastElement.className = 'day';
        forecastElement.innerHTML = `
            <img src="${icon}" alt="Weather Icon">
            <div class="temp">${temp}°C</div>
            <div>${day}</div>
        `;

        forecastContainer.appendChild(forecastElement);
    }
}
