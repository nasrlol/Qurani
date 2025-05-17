"use strict";

export const viewSurahFoldButton = `
	<button class="fold" id="fold">View Surah</button>
`

export async function hideOnFold() {
    console.log("function is running");

    console.log("DOM content is loaded");

    const button = document.getElementById("fold");
    const quranOfTheDayView = document.getElementById("surahDay");
    console.log(button, quranOfTheDayView);

    quranOfTheDayView.style.height = "0";
    quranOfTheDayView.style.transition = "height 3s ease-in-out";

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