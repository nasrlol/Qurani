"use strict";

export let favoritesList = [];
export const favoritesButton = `<button id="setFavorite" class="setFavorite">☆</button>`

export function favorite(surahName) {
    const favoriteButton = document.getElementById("setFavorite");
    const updateButton = () => {
        if (favoritesList.includes(surahName)) {
            favoriteButton.textContent = "★";
        } else {
            favoriteButton.textContent = "☆";
        }
    }

    favoriteButton.onclick = () => {

        if (!favoritesList.includes(surahName)) {
            favoritesList.push(surahName);
            favoriteButton.textContent = "★";
        } else {
            const index = favoritesList.indexOf(surahName);
            favoritesList.splice(index, 1);
        }

        localStorage.setItem("favorites", JSON.stringify(favoritesList));
        updateButton();
    }

}

