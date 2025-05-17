"use strict";

import {nav} from "../components/nav.mjs";
import {ayahOfTheDay} from "../components/ayahDay.mjs";
import {footer} from "../components/footer.mjs";
import {surahOfTheDay} from "../components/surahDay.mjs";
import {hideOnFold, viewSurahFoldButton} from "../components/foldButton.mjs";


export async function render(container) {
    container.innerHTML = ` 
    ${nav}
	<main>
	<aside>
	
		<h1>Welcome to Qurani</h1>
		<h1>ٱلسَّلَامُ عَلَيْكُمْ</h1>
	</aside>
		<div>
			<section id="ayah-of-the-day">
				<h2>Ayah of the Day</h2>
				${ayahOfTheDay}
			</section>
			<section id="surah-of-the-day">
				<h2>Surah of the day </h2>
				<br>
				${viewSurahFoldButton}
				${surahOfTheDay}
			</section>
		</div>
	</main>
	${footer}
`;
    await hideOnFold();
}
