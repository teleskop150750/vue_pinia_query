import { PiniaColada } from "@pinia/colada";
import { DataLoaderPlugin } from "unplugin-vue-router/data-loaders";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(PiniaColada);
app.use(DataLoaderPlugin, { router });
app.use(router);

app.mount("#app");
