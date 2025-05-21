"use strict";

import {navbar} from "../components/navbar.mjs";
import {footer} from "../components/footer.mjs";
import {favoritesList} from "../components/favorites-list.mjs";

export function render(container) {
    let output = "";

    favoritesList.forEach((surah) => {
        output += `<button class="options">${surah.surahName}</button>`;
    });

    container.innerHTML = `
        ${navbar}
        <main>
        <h2>Favorite Surahs</h2>
            ${output}
        </main>
        ${footer}
    `;

}