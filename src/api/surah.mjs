"use strict";

/*
    return a list of all the surahs
    or return exact surah
    adding a number to the end specifies the number of the surah
*/

const url = "http://api.alquran.cloud/v1";

export let surah = {

    surah: ``,
    nameEnglish: ``,
    nameArabic: ``,
    number: ``

}

export async function getSurah() {
    // the amounts of surahs in the Quran.
    const maxSurahNum = 114;
    let newSurahNum = Math.floor(Math.random() * (maxSurahNum - 1) + 1);
    let newURL = `${url}/surah/${newSurahNum}`;

    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        // arrow function dat arrays.map gebruikt naar het schijnt, het fijne snap ik er nog niet van, maar het zet het object
        // om naar tekst en dat is handig voor de output, dan nog eens het nummer van de aya erbij en je hebt al een goeie representatie
        // van hoe een surah in een quran er uit zou moeten zien
        // TO DO: het uitklapbaar maken zodat het wat beter handelbaar is voor de UI

        surah.surah = data.data.ayahs.map((ayah) => `${ayah.text} ${ayah.numberInSurah}`);
        surah.nameEnglish = data.data.englishName;
        surah.nameArabic = data.data.name;
        surah.number = data.data.number;

    } catch (error) {
        console.error("there was a problem fetching an ayah: ", error);
    }

}

export async function getSurahListOption() {
    let newURL = `${url}/surah`;
    try {
        const response = await fetch(newURL);
        if (!response.ok) new Error("failed to fetch the URL");

        const data = await response.json();
        // was getting commas between the names of the surahs, but apparently that`s because the names are getting joined as arrays and when js converts them to strings (toString) the commas are retrieved as well;
        return data.data.map((surah) => `<button class="options">${surah.number} ${surah.englishName}</button>
		`).join("");
    } catch (error) {
        console.error("There was a problem fetching the list of surahs: ", error);
    }
}

export async function filterSearch() {

    console.log("content loaded");
    const input = document.getElementById("searchInput");
    const buttons = document.querySelectorAll(".options");

    input.addEventListener("input", () => {
        const query = input.value.toLowerCase();
        buttons.forEach(button => {
            const text = button.textContent.toLowerCase();
            console.log(text)
            button.style.display = !text.includes(query) ? "none" : "block";
        });
    });
}
