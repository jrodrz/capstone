// 'Import' the Express module instead of http
const express = require("express");
// Initialize the Express application
const app = express();
const mongoose = require('mongoose')

dotenv.config();
const PORT = process.env.PORT || 4040; // we use || to provide a default value
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/weather/:city", (request, response) => {
  // Express adds a "params" Object to requests that has an matches parameter created using the colon syntax
  const city = request.params.city;
  const apiKey = request.query.apikey;
  // Generate a random number to use as the temperature
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
  const min = 70;
  const max = 90;
  const temp = Math.floor(Math.random() * (max - min + 1) + min);
  // handle GET request for weather with an route parameter of "city"
  response.status(418).json({
    current: `The weather in ${city} is ${temp} degrees today.`,
    apikey: apiKey
  });
});

app.use(cors);

app.post("/add", (request, response) => {
  const num1 = request.body.numberOne;
  const num2 = request.body.numberTwo;
  const responseBody = {
     sum: num1 + num2
  };
  response.json(responseBody);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

