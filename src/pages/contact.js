
"use strict";
import { nav } from "../components/nav";
import { footer } from "../components/footer";

const contact = `

	${nav}	
	<header>
		<h1>Contact</h1>
	</header>
	<main>
	${footer}
	</main>

`;
export function render(container) {
	container.innerHTML = contact;
}

