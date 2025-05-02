import "./style.css";
import {nav} from "./components/nav.js";
import {footer} from "./components/footer.js"
import {ayaOfTheDay} from "./components/ayaOfTheDay.js";

document.querySelector("#app").innerHTML = `
	${nav}	
	${ayaOfTheDay}
	${footer}
`;



