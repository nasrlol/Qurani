"use strict";
import { nav } from "../components/nav";
import { footer } from "../components/footer";

const about = `

	${nav}	
	<header>
		<h1>About</h1>
	</header>
	<main>
	${footer}
	</main>

`;
export function render(container) {
	container.innerHTML = about;
}

