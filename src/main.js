import { home } from "./pages/home.js";
import "./style.css";

document.querySelector("#app").innerHTML = `
	${home}	
`;

document.getElementById("darkModeButton").addEventListener("click", () => {
	document.body.classList.toggle("darkMode");
});
