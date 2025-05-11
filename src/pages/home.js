"use strict";

import { nav } from "../components/nav.js";
import { ayahOfTheDay } from "../components/ayahDay.js";
import { footer } from "../components/footer.js";
import { surahOfTheDay } from "../components/surahDay.js";

export const home = `

	${nav}	
	<main>
	<header>
		<h1>ٱلسَّلَامُ عَلَيْكُمْ</h1>
	</header>
	<main>
		<div class="featuresOfTheDay">
			<section id="ayah-of-the-day">
				<h2>Ayah of the Day</h2>
				${ayahOfTheDay}
			</section>
			<section id="surah-of-the-day">
				<h2>Surah of the day</h2>
				${surahOfTheDay}
			</section>
		</div>

		<section id="features">
			<h2>Explore Features</h2>
			<ul>
				<li><a>Search by keywords</a></li>
				<li>tafsir and translations</li>
			</ul>
		</section>
	</main>
	${footer}
	`;
