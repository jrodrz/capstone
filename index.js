import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;

  afterRender(state);

  router.updatePageLinks()
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Contact") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const gym = [];
      // Interate over the toppings input group elements
      for (let input of inputList.gyms) {
        // If the value of the checked attribute is true then add the value to the toppings array
        if (input.checked) {
          gyms.push(input.value);
        }
      }

      const requestData = {
        neighborhoods: inputList.neighborhood.value,
        gyms: inputList.gyms.value,
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.THE_FIT_FAMILY_API_URL}/fit`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Fit.fits.push(response.data);
          router.navigate("/");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        // New Axios get request utilizing already made environment variable
        axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
        )
        .then(response => {
          const kelvinToFahrenheit = kelvinTemp =>
            Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

          store.Home.weather = {
            city: response.data.name,
            temp: kelvinToFahrenheit(response.data.main.temp),
            feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
            description: response.data.weather[0].main
          };
          done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
      break;

    // Added in Lesson 7.1
    case "The Fit Family":
      axios
        .get(`${process.env.THE_FIT_FAMILY_API_URL}/TheFitFamily`)
        .then(response => {
          store.Fitness.TheFitFamily = response.data;
          done();
        })
        .catch((error) => {
          console.log("It puked", error);
          done();
        });
        break;
    default :
      done();
  }
},
  already: (params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  },
})
router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
        render(store.Viewnotfound);
      }
    },
  })
  .resolve();
