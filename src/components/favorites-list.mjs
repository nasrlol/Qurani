"use strict";

export let favoritesList = [];

class Surah {
    constructor(surahName) {
        this.surahName = surahName;
    }
}

export function favorite(surahName) {
    let favorite = false;
    const favoriteButton = document.getElementById("setFavorite");

    let surah = new Surah(surahName);

    favoriteButton.addEventListener("click", () => {
        if (!favorite) {
            favoriteButton.textContent = "★";
            favoriteButton.style.color = "yellow";
            favoritesList.push(surah);

            // way of debugging if  the surah name was added to the list
            console.log(favoritesList);

        } else {

            favoriteButton.textContent = "☆";
            favoriteButton.style.color = "white";

            favoritesList.pop();

            // way of debugging if  the surah name was added to the list
            console.log(favoritesList);

            favorite = !favorite;
        }
    })
}


export const favoritesButton = `
    <button id="setFavorite" class="setFavorite">☆</button>
`
