"use strict";
import {nav} from "../components/nav.mjs";
import {footer} from "../components/footer.mjs";

export function render(container) {
    container.innerHTML = `
		${nav}	
		<main>
			<h1>Tafsir</h1>
		</main>
		${footer}
	`;
}

