// Step 1: Fetch Weather Data
function fetchWeatherData(city) {
    const apiKey = "395d9109a3adc2dca8241f32f53c8331"; // Replace with your real API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        displayError(error.message);
      });
  }
  
  // Step 2: Display Weather Data
function displayWeather(data) {
        // Clear any previous content
        weatherContainer.innerHTML = '';
    
        // Create new elements dynamically for displaying weather data
        const cityName = document.createElement('h3');
        cityName.textContent = `Weather in ${data.name}`;
    
        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
    
        const humidity = document.createElement('p');
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    
        const condition = document.createElement('p');
        condition.textContent = `Condition: ${data.weather[0].description}`;
    
        // Append all created elements to the weather display container
        weatherContainer.append(cityName, temperature, humidity, condition);
      }
    
  
  // Step 3: Display Error
  function displayError(message) {
    const errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.textContent = `Error: ${message}`;
  }
  
  // Step 4: Handle User Input
  document.getElementById("fetchWeatherButton").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    if (city) {
      fetchWeatherData(city);
    } else {
      displayError("Please enter a city name.");
    }
  });
  