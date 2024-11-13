import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import components from "./components";
import directives from "./directives";
import "./assets/main.scss";
import "animate.css";

const app = createApp({
  render: () => h(App),
});

components.forEach((component) => {
  app.component(component.name || component.__name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
