"use strict";
import {navbar} from "../components/navbar.mjs";
import {footer} from "../components/footer.mjs";
import {changeTheme} from "../utils/theme-utils.mjs";


export function render(container) {
    container.innerHTML = `
		${navbar}
		<main>
			<h1>About</h1>
			<section class="about">
				<p>Qurani provides a way for people to interact with the Quran. Be it through audio recitations, translation or the Quran itself.</p>
				<p>We pull all of our data from the <a href="https://www.alquran.cloud">Al Quran Cloud API</a> and so a big thanks goes to <a href="https://islamic.network/">Islamic Network</a> and its contributors.</p>
				<p>We support both Arabic and translated texts .</p>
				<p>Thanks to <a href="https://islamic.network/">Islamic Network</a> and everyone who contributes to <a href="https://www.alquran.cloud">Al Quran Cloud API</a></p>
			</section>
		</main>
		${footer}`;
    changeTheme();
}

