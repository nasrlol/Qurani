"use strict";
import {nav} from "../components/nav.mjs";
import {footer} from "../components/footer.mjs";

const tafsir = `

	${nav}	
	<main>
		<h1>Tafsir</h1>
	</main>
	${footer}

`;
export function render(container) {
	container.innerHTML = tafsir;
}

