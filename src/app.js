import { keygen } from "./key";
import { genn } from "./Key2";

export const domData = (() => {
  const btnsearch = document.getElementById("btn");
  const clearsearch = document.getElementById("clear-Btn");
  const resultdiv = document.querySelector(".resultdiv");
  const imgdiv = document.querySelector(".img-div");

  btnsearch.addEventListener("click", () => {
    takeLocationAPI();
    gifAPI();
    resultdiv.style.visibility = "visible";
    imgdiv.style.visibility = "visible";
  });
  clearsearch.addEventListener("click", () => {
    const citydata = document.getElementById("city");
    const statedata = document.getElementById("state");
    const countrydata = document.getElementById("country");
    resultdiv.style.visibility = "hidden";
    imgdiv.style.visibility = "hidden";
    citydata.value = "";
    statedata.value = "";
    countrydata.value = "";
  });
})();

//fetch function to fatch data from api
export async function takeLocationAPI() {
  console.log("clicked");

  console.log("hey.... i am taking in location", location);

  try {
    const citydata = document.getElementById("city").value;
    const statedata = document.getElementById("state").value;
    const countrydata = document.getElementById("country").value;
    console.log(citydata, statedata, countrydata + ".....value coming ");

    const infodata1 = document.getElementById("info1");
    const infodata2 = document.getElementById("info2");
    const infodata3 = document.getElementById("info3");
    const infodata4 = document.getElementById("info4");
    const infodata5 = document.getElementById("info5");
    const infohead = document.getElementById("info-header");

    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        citydata +
        "," +
        statedata +
        "," +
        countrydata +
        `&appid=${keygen()}`
    );
    console.log("checking api key", keygen());
    console.log(response);
    const locationdata = await response.json();
    console.log(locationdata);
    infohead.textContent = citydata + "," + " " + statedata + " " + countrydata;
    infodata1.textContent = `temp: ${Math.round(locationdata.main.temp)}°C`;
    infodata2.textContent = `feels_like: ${Math.round(
      locationdata.main.feels_like
    )}°C`;
    infodata3.textContent = `humidity: ${locationdata.main.humidity}%`;
    infodata4.textContent = `wind: ${Math.round(locationdata.wind.speed)} MPH`;
    infodata5.textContent = `weather: ${locationdata.weather[0].description}`;
  } catch (error) {
    const message1 = document.querySelector("#message1");

    message1.style.visibility = "visible";
    message1.textContent = "can't find weather in your location. Try again!";
    console.log("something went wrong while fetching dat....", error.message);
  }
}
// takeLocationAPI();

//gif API DISPLAY
export async function gifAPI() {
  try {
    const gifresponse = document.querySelector(".gifresponse");
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${genn()}&s=clouds`,
      { mode: "cors" }
    );
    const cloudData = await response.json();
    gifresponse.src = cloudData.data.images.original.url;
    console.log(cloudData);
  } catch (error) {
    const domData = () => {
      const btnsearch = document.getElementById("btn");
      const clearsearch = document.getElementById("clear-Btn");
      const resultdiv = document.querySelector(".resultdiv");
      const imgdiv = document.querySelector(".img-div");
      btnsearch.addEventListener("click", () => {
        takeLocationAPI();
        gifAPI();
        resultdiv.style.visibility = "visible";
        imgdiv.style.visibility = "visible";
      });
      clearsearch.addEventListener("click", () => {
        const citydata = document.getElementById("city");
        const statedata = document.getElementById("state");
        const countrydata = document.getElementById("country");
        resultdiv.style.visibility = "hidden";
        imgdiv.style.visibility = "hidden";
        citydata.value = "";
        statedata.value = "";
        countrydata.value = "";
      });
    };
  }
}
