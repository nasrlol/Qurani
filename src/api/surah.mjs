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

export async function getFeaturedSurah(number) {

    const newURL = `${url}/surah/${number}`
    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the url");

        const data = await response.json();

        return data.data.ayahs.map((ayah) => `<br><p class="arabic">${ayah.numberInSurah} ${ayah.text}</p>`).join("");
    } catch (error) {
        console.error("there was an error fetching surat al fatiha")
    }
}

export async function getSurah(number) {

    let newURL = `${url}/surah/${number}`
    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        return data.data.ayahs.map((ayah) => `<p class="arabic">${ayah.numberInSurah} ${ayah.text}</p><br/>`).join("");
    } catch (error) {
        console.error("there was an error fetching a specific surah");
        return null;
    }
}

export async function getSurahTitle(number) {

    let newURL = `${url}/surah/${number}`
    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        return data.data.englishName;
    } catch (error) {
        console.error("failed to fetch the title");
    }
}

export async function getSurahTranslated(number) {

    let newURL = `${url}/surah/${number}/en.asad`
    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        return data.data.ayahs.map((ayah) => `<p class="arabic">${ayah.numberInSurah} ${ayah.text}</p><br/>`).join("");
    } catch (error) {
        console.error("there was an error fetching a specific surah");
        return null;
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
        return null;
    }
}

export function changeLanguage() {
    const languageValue = document.getElementById("selectLanguage");
    return languageValue.value === "arabic" ? "name" : "englishName";
}

function sortAscending(a, b) {
    return a - b;
}

function sortDescending(a, b) {
    return b - a;
}

export async function getSurahListOption(language = "englishName", sortMethod = "ascending", sortRevelationLocation = "all") {

    let newURL = `${url}/surah`;
    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        // added a way to sort everything based on the surah number
        // was getting commas between the names of the surahs, but apparently that`s because the names are getting joined as arrays and when js converts them to strings (toString) the commas are retrieved as well;

        return data.data
            .sort((a, b) => (sortMethod === "ascending") ? sortAscending(a.number, b.number) : sortDescending(a.number, b.number))
            .filter(surah => {
                if (sortRevelationLocation === "all") {
                    return true;
                } else {
                    console.log(surah.revelationType, sortRevelationLocation);
                    return surah.revelationType === sortRevelationLocation;
                }
            })
            .map((surah) =>
                // eerst had ik het idee om de ayahs te volgen via een url, leek te moeilijk, dus kreeg het idee (id="ayahNumber"), dit werkte toch niet zo vlot, verder opgezocht en alternatief gevonden → data-id, werkt wel
                `<button data-id="${surah.number}" class="options" >${surah.number} ${surah[language]}</button>
		`).join("");
    } catch (error) {
        console.error("There was a problem fetching the list of surahs: ", error);
        return null;
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
