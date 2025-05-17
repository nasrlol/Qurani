// noinspection HttpUrlsUsage

"use strict";

export let ayah = {
    surahNumber: ``,
    surahNameEnglish: ``,
    surahNameArabic: ``,
    ayah: ``,
    ayahNumber: ``,
    audioURL: ``,
    numberQuran: ``
}


const url = "http://api.alquran.cloud/v1";

export async function getAyah() {
    // idee: functie om een random ayah uit de Koran te halen en daar uit een ayah of the day the maken

    // aantal ayahs in de Quran
    const maxAyah = 6349; // magic number, het totaal aantal ayahs in de Koran, opzoekbaar

    let ayahNum = Math.floor(Math.random() * (maxAyah - 1) + 1); // genereer van een random getal tussen 0 en het maximum om dus een random ayah te krijgen
    let newURL = `${url}/ayah/${ayahNum}`;

    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();

        console.log(data);
        ayah.surahNumber = data.data.surah.number;
        ayah.surahNameArabic = data.data.surah.name;
        ayah.surahNameEnglish = data.data.surah.englishName;
        ayah.ayah = data.data.text;
        ayah.ayahNumber = data.data.numberInSurah;
        ayah.numberQuran = data.data.number;

        return `${data.data.surah.englishName} ${surahNumber}\n ${ayah} ${await ayahOfTheDayAudio(surahNumber, ayahNum)}`
    } catch (error) {
        console.error("there was a problem fetching a random ayah: ", error);
    }
}


export async function searchAyah() {
    let newURL = "";
    document.getElementById("searchAyahButton").addEventListener("click", () => {
        let searchKeyword = document.getElementById("ayahSearchKeyword").innerText;
        let surah = document.getElementById("ayahSearchSurah").innerText;
        let language = document.getElementById("ayahSearchLanguage").innerText;

        newURL = `${url}/search/${searchKeyword}/${surah}/${language}`;
    });

    try {
        const response = await fetch(newURL);
        if (!response.ok) new Error("failed to fetch the URL");

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("there was a problem fetching a random ayah: ", error);
    }
}


export async function getAyahAudio(numberQuran) {
    let newAudioURL = `${url}/ayah/${numberQuran}/ar.alafasy`;

    try {
        const response = await fetch(newAudioURL);
        if (!response.ok) new Error("failed to fetch the URL");

        const data = await response.json();
        ayah.audioURL = data.data.audio;

    } catch (error) {
        console.error(error);
        return null;
    }
}
