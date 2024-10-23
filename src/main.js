import "./assets/main.scss";
import "./assets/media-queries.scss";
import "vue3-carousel/dist/carousel.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// language
import { createI18n } from "vue-i18n";
import AR from "./locale/AR.json";
import EN from "./locale/EN.json";

// chart
import VueApexCharts from "vue3-apexcharts";

// toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
let lang = sessionStorage.getItem("lang") || "ar";
const i18n = createI18n({
  locale: lang,
  messages: {
    en: EN,
    ar: AR,
  },
});

app.use(createPinia());
app.use(router);
app.use(Toast);
app.use(i18n);
// charts
app.use(VueApexCharts);

// bootstrap
import "bootstrap";

app.mount("#app");
