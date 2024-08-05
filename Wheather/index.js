var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("description"); /// all are varibale create to use queryselector to to html data
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
apik = "392737ffe76af7899e785c6e0ffe5a2b";
function convertion(val) {
  return (val - 273).toFixed(3); //feride cha data conver sathi function create  to fixed use is kiti decimal value feride convert -273
}
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspeed = data["wind"]["speed"];

      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} c</span>`;
      description.innerHTML = `Sky Conditions:<span>${descrip}<span>`;
      wind.innerHTML = `wind speed:<span>${wndspeed} km/h<span>`;
    })
    .catch((err) => alert("You entered Wrong city name"));
});
