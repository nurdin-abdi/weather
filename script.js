const weather = {
  // "54159e705ad00736834b6725295e4b32",
  apiKey: "54159e705ad00736834b6725295e4b32",
  fetchData: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then(function (response) {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        } else {
          console.log(response);
          return response.json();
        }
      })
      .then((data) => this.displayData(data));
  },
  displayData: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    document.querySelector(".weather-title").innerText = "Weather in " + name;
    document.querySelector(".temprature").innerText = temp + "°C";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
  },
  search: function () {
    this.fetchData(document.querySelector(".input").value);
  },
};

document.querySelector(".search").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".input").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    weather.search();
  }
});
let cityName = document.querySelector('.city');
cityName
weather.fetchData("Nairobi");
