import { createApp } from "vue";
import App from "./App.vue";

import ErrorAlert from "./components/ErrorAlert.vue";

createApp(App).mount("#app");

App.component("errorAlert", ErrorAlert);
