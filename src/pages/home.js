"use strict";

import { nav } from "../components/nav.js";
import { ayahOfTheDay } from "../components/ayaOfTheDay";
import { footer } from "../components/footer.js";

export const home = `

	${nav}	
	<main>
	<header>
		<h1>Welcome to the Quran App</h1>
		<p>Your daily connection with the Quran</p>
	</header>
	<main>
		<section id="ayah-of-the-day">
			<h2>Ayah of the Day</h2>
			${ayahOfTheDay}
		</section>

		<section id="features">
			<h2>Explore Features</h2>
			<ul>
				<li>Search by keywords</li>
				<li>Study tafsir and translations</li>
			</ul>
		</section>
	</main>
	${footer}
	`;
