"use strict";
import {nav} from "../components/nav.mjs";
import {footer} from "../components/footer.mjs";
import {filterSearch, getSurahListOption} from "../api/surah.mjs";


export async function render(container) {
    const quran = `
		${nav}
	<main>
		<input id="searchInput" class="searchInput">
		<div class="selectSurah" id="selectSurah">
			${await getSurahListOption()}
		</div>
	</main>
	${footer}`;

    container.innerHTML = quran;

    filterSearch()
}
