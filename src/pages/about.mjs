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
				<p>Qurani provides a way for people to interact with the Quran. Be it through audio recitations, tafsir, translation or the Quran itself.</p>
				<p>We pull all of our data from the <a href="https://www.alquran.cloud">Al Quran Cloud API</a> and so a big thanks goes to <a href="https://islamic.network/">Islamic Network</a> and its contributors.</p>
				<p>The platform is designed with a focus on clarity and ease of use. No clutter, no distractions.</p>
				<p>Everything on Qurani is free to use. No accounts, no ads, no paywalls. We believe that everyone should have unrestricted access to the Quran and its meanings, without barriers.</p>
				<p>We support both Arabic and translated texts so you can follow along no matter your background. Whether you're fluent in Arabic or just starting to learn, Qurani adapts to you.</p>
				<p>Again, huge thanks to <a href="https://islamic.network/">Islamic Network</a> and everyone who contributes to <a href="https://www.alquran.cloud">Al Quran Cloud API</a>. Your work makes Qurani possible.</p>
			</section>
		</main>
		${footer}`;
    changeTheme();
}

