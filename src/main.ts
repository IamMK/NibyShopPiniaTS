import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import BaseBadge from "./components/ui/BaseBadge.vue";

import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.component("base-badge", BaseBadge);

app.mount("#app");
