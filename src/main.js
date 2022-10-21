import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import DashedNav from "./components/dashNav.vue";

const app = createApp(App);
app.use(router);
app.component("DashedNav", DashedNav);
app.mount("#app");
