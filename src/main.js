import "./style.css";
import {handleRoute} from "./utils/router.js";

window.addEventListener("popstate", handleRoute);
handleRoute();



