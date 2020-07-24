const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
console.log("The API Key is: " + API_KEY);

const app = express();
app.listen(process.env.PORT || 2999, () => console.log("listening at 2999"));
app.use(express.static("public"));

app.get("/weather/:city", async (request, response) => {
  const city = request.params.city;

  const fetch_response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );

  const responseData = await fetch_response.json();
  return response.json(responseData);
});

app.get("/forecast/:city", async (request, response) => {
  const city = request.params.city;

  const fetch_response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
  );

  const responseData = await fetch_response.json();
  return response.json(responseData);
});
