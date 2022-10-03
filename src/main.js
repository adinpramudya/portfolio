import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Particles from "vue3-particles";
import router from "./router.js";
const app = createApp(App);
app.use(Particles);
app.use(router);
app.mount("#app");

export default router;
