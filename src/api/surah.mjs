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

export async function getSurah(number) {

    let newURL = `${url}/surah/${number}`
    try {

        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");


        const data = await response.json();
        return data.data.ayahs.map((ayah) => `<p class="arabic">${ayah.numberInSurah} ${ayah.text}</p><br/><hr>`).join("");
    } catch (error) {

        console.error("there was an error fetching a specific surah");
    }
}

export async function getSurahRandom() {
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

        surah.surah = data.data.ayahs.map((ayah) => `<p class="arabic">${ayah.numberInSurah} ${ayah.text} </p><br><hr>`).join("");
        surah.nameEnglish = data.data.englishName;
        surah.nameArabic = data.data.name;
        surah.number = data.data.number;

    } catch (error) {
        console.error("there was a problem fetching an ayah: ", error);
    }

}

export function changeLanguage() {
    const languageValue = document.getElementById("selectLanguage");
    return languageValue.value === "arabic" ? "name" : "englishName";
}

export async function getSurahListOption(language = "englishName") {

    let newURL = `${url}/surah`;
    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        // was getting commas between the names of the surahs, but apparently that`s because the names are getting joined as arrays and when js converts them to strings (toString) the commas are retrieved as well;
        return data.data.map((surah) =>
            // eerst had ik het idee om de ayahs te volgen via een url, leek te moeilijk, dus kreeg het idee (id="ayahNumber"), dit werkte toch niet zo vlot, verder opgezocht en alternatief gevonden → data-id, werkt wel
            `<button data-id="${surah.number}" class="options" >${surah.number} ${surah[language]}</button>
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

export async function searchKeyword(string) {

    let newURL = `${url}/search/${string}`

    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("There was trouble finding the ayah you searched for");

        const data = await response.json();

        console.log(data.data.count);
        return data.data.matches.map((ayah) => `<p>${ayah.text}</p><br>`).join("");

    } catch (error) {
        console.error("There was an error with the searchAyah() function");
    }

}