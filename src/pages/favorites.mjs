"use strict";

import {navbar} from "../components/navbar.mjs";
import {footer} from "../components/footer.mjs";
import {favoritesList} from "../components/favorites-list.mjs";
import {changeTheme} from "../utils/theme-utils.mjs";

export function render(container) {

    container.innerHTML = `
        ${navbar}
        <main>
            <h2>Favorite Surahs</h2>
            <div class="selectSurah" id="favoritesList">
            
            </div>
        </main>
        ${footer}
    `;

    const output = document.getElementById("favoritesList");

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritesList.splice(0, favoritesList.length, ...storedFavorites);

    if (favoritesList.length === 0) {
        output.append("");
        const notFound = document.createElement("p");
        notFound.textContent = "No favorite Surahs saved yet."
    } else {
        favoritesList.forEach((surah) => {
            const button = document.createElement("button");
            button.textContent = surah;
            output.append(button);
        });
    }

    changeTheme();
}