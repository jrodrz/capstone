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
    ${Footer()}`;

  render();

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
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
          .get(`${process.env.THE_FIT_FAMILY_API_URL}/maps`)
          .then((response) => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
              store.Map.maps = response.data;
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
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
});

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
