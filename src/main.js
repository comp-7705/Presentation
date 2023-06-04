// import src
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";

// import vue related libraries
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import slides
import { setStyle } from "@js/slide.js";
import { dates } from "@js/home.js";
import Sample from "@slides/Sample.vue";

// Define routes
const routes = [
    {
        path: "/",
        component: Home,
        beforeEnter: (to, from) => {
            // Not directly access the home page
            if (from.fullPath !== "/") {
                window.location.reload();
            }
            // console.log(to, from);
        },
    },
    { path: "/Sample", component: Sample },
];

// Dynamically import all slides
for (const _ of dates) {
    const date = _.replaceAll(" ", "");
    routes.push({
        path: `/${date}`,
        component: () => import(`./slides/${date}.vue`),
    });
}

// Create the router instance and pass the `routes` option
const router = createRouter({
    // Deploy to github pages
    history: createWebHistory("/Presentation/"),
    routes,
});

// Create and mount the root instance
const app = createApp(App);

// Make the router instance available in the app
app.use(router);

// Add icon to the library
library.add(fas);
library.add(fab);
// Add font awesome icon component
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

setStyle();
