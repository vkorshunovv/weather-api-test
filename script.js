const div = document.querySelector(".container");
const form = document.createElement("form");
div.appendChild(form);
const input = document.createElement("input");
form.appendChild(input);
const button = document.createElement("button");
form.appendChild(button);
button.textContent = "Search";
button.setAttribute("type", "submit");
const p = document.createElement("p");
div.appendChild(p);

button.addEventListener("click", (e) => {
  e.preventDefault();
  const city = input.value;
  getForecast(city);
});

const weatherData = {
  country: "",
  locationName: "",
  celciumDegree: "",
};

let { country, locationName, celciumDegree } = weatherData;

async function getForecast(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=330e43a6758846a7a2783931242906&q=${city}`,
      { mode: "cors" }
    );

    const data = await response.json().then((res) => {
      console.log(res.location.country);
      country = res.location.country;
      locationName = res.location.name;
      celciumDegree = res.current.temp_c;

      p.textContent = `City: ${locationName}, Country: ${country}, Weather in C: ${celciumDegree}`;
    });
  } catch (e) {
    console.log(e);
  }
}
