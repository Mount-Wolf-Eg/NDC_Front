import "./assets/main.scss";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// language
import { createI18n } from "vue-i18n";
import ar from "./locale/AR.json";
import en from "./locale/EN.json";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const i18n = createI18n({
  locale: "en",
  messages: {
    en: en,
    ar: ar,
  },
});

app.use(createPinia());
app.use(router);
app.use(i18n);

// bootstrap
import "bootstrap";

app.mount("#app");
