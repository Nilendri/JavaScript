const form = document.getElementById("weatherForm");
const input = document.getElementById("input");
const search = document.getElementById("search");
const city = document.getElementById("cityname");
const weather = document.getElementById("weathername");
const temp = document.getElementById("temp");
const date = document.getElementById("date");
const time = document.getElementById("timesec");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let cityname = input.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=931f131dde3f4ae2fcbc3289fc646471`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const tempval = Math.round(data["main"]["temp"]);
      const weatherval = data["weather"][0]["main"];
      city.innerHTML = cityname;
      weather.innerHTML = weatherval;
      temp.innerHTML = `${tempval}°C`;

      const newDate = new Date();
      const monthName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const formatedDate = `${newDate.getDate()},${
        monthName[newDate.getMonth()]
      }`;
      date.innerHTML = formatedDate;
      function timeset() {
        let newDate = new Date();
        let hours = newDate.getHours();
        let min = newDate.getMinutes();
        let sec = newDate.getSeconds();
        time.innerHTML = `${hours}h.${min}m.${sec}s`;
      }

      setInterval(timeset, 1000);
    })
    .catch(function (error) {
      console.error("Error fetching weather data:", error);
    });
});
