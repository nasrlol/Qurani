"use strict";

import {nav} from "../components/nav.mjs";
import {getAyahOfTheDay} from "../components/ayahDay.mjs";
import {footer} from "../components/footer.mjs";
import {hideOnFold, viewSurahFoldButton} from "../components/foldButton.mjs";
import {surahDay} from "../components/surahDay.mjs";


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
				${await getAyahOfTheDay()}
			</section>
			<section id="surah-of-the-day">
				<h2>Surah of the day </h2>
				<br>
				${viewSurahFoldButton}
				${surahDay}
			</section>
		</div>
	</main>
	${footer}
`;
    await hideOnFold();
}
