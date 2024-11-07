document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  const dateElement = document.getElementById("date");
  const searchBar = document.getElementById("searchBar");

  // Display dynamic greeting
  const hours = new Date().getHours();
  let greeting = "Hello";
  if (hours < 12) greeting = "Good Morning";
  else if (hours < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  greetingElement.textContent = greeting;

  // Display current date
  const options = { weekday: "long", month: "long", day: "numeric" };
  dateElement.textContent = new Date().toLocaleDateString(undefined, options);

  // Add search functionality
  searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = searchBar.value.trim();
      if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
          query
        )}`;
      }
    }
  });

  // Bookmark functionality
  const bookmarksList = document.getElementById("bookmarksList");
  const bookmarkInput = document.getElementById("bookmarkInput");
  document.getElementById("addBookmark").addEventListener("click", () => {
    const url = bookmarkInput.value.trim();
    if (url) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
      bookmarksList.appendChild(listItem);
      bookmarkInput.value = "";
    }
  });

  // Notes functionality
  const notesList = document.getElementById("notesList");
  const noteInput = document.getElementById("noteInput");
  document.getElementById("addNote").addEventListener("click", () => {
    const note = noteInput.value.trim();
    if (note) {
      const listItem = document.createElement("li");
      listItem.textContent = note;
      notesList.appendChild(listItem);
      noteInput.value = "";
    }
  });

  // Weather functionality
  const weatherData = document.getElementById("weatherData");
  // const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API key
  const apiKey = "f323de386c4f4d97ccc39b065c38b36a"; // Replace with your OpenWeatherMap API key
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { name, main, weather } = data;
        weatherData.textContent = `${name}: ${main.temp}°C, ${weather[0].description}`;
      })
      .catch(
        (error) => (weatherData.textContent = "Unable to fetch weather data")
      );
  });
});
