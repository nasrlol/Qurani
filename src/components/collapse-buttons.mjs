"use strict";

export const viewSurahFoldButton = `
	<button class="fold" id="fold">View Surah</button>
`

export async function fold() {

    const button = document.getElementById("fold");
    const quranOfTheDayView = document.getElementById("surahDay");

    let expanded = false;
    button.addEventListener("click", () => {
        if (expanded) {
            quranOfTheDayView.style.height = "0";
            button.textContent = "View Surah";
        } else {
            quranOfTheDayView.style.height = "fit-content";
            button.textContent = "Hide Surah";
        }
        expanded = !expanded;
    });


}