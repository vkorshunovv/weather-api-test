function addHTMLElements() {
  const div = document.querySelector(".container");
  const form = document.createElement("form");
  div.appendChild(form);
  const input = document.createElement("input");
  form.appendChild(input);
  const button = document.createElement("button");
  form.appendChild(button);
  button.textContent = "Search";
}

function getLocation() {
  const city = prompt("Write your city");
  console.log(city);
  return city;
}

async function getForecast(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=330e43a6758846a7a2783931242906&q=${city}`,
      { mode: "cors" }
    );
    if (!response.hasOwnProperty(name)) {
      throw new Error("Please enter correct location");
    }
    const data = await response.json().then((res) => {
      console.log(res.location.country);
    });
  } catch (e) {
    console.log(e);
  }
}
addHTMLElements();
const city = getLocation();
getForecast(city);
