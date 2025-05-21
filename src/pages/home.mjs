"use strict";

import {navbar} from "../components/navbar.mjs";
import {getAyahOfTheDay} from "../components/ayah-of-the-day.mjs";
import {footer} from "../components/footer.mjs";
import {fold, viewSurahFoldButton} from "../components/collapse-buttons.mjs";
import {randomSurah} from "../components/surah-of-the-day.mjs";
import {changeTheme} from "../utils/theme-utils.mjs";


export async function render(container) {

    container.innerHTML = ` 
    ${navbar}
	<main>
	<aside>
		<h1>Welcome to Qurani</h1>
		<h1>ٱلسَّلَامُ عَلَيْكُمْ</h1>
	</aside>
		<div class="homeDashboard">
			<section id="ayah-of-the-day">
				<h2>Ayah of the Day</h2>
				${await getAyahOfTheDay()}
			</section>
			<section id="surah-of-the-day">
				<h2>Surah of the day </h2>
				<br>
				${viewSurahFoldButton}
				${await randomSurah()}
			</section>
		</div>
	</main>
	${footer}
`;
    await fold();
    changeTheme()
}
