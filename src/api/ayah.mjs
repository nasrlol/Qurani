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

async function getMaxNumber() {


    // fall back value in case the fetch does not work
    const DEFAULT_MAX_AYAH = 6349;

    let newURL = `${url}/meta`

    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        return parseInt(data.data.ayahs.count);
    } catch (error) {
        console.error("failed to fetch the ayah count");
        return DEFAULT_MAX_AYAH;
    }
}

export async function getAyah() {
    // idee: functie om een random ayah uit de Koran te halen en daar uit een ayah of the day the maken
    // aantal ayahs in de Quran
    // 20/05 decided to fetch the ayah count instead of hardcoding it
    //  const maxAyah = 6349; // magic number, het totaal aantal ayahs in de Koran, opzoekbaar

    const maxAyah = await getMaxNumber();

    let ayahNum = Math.floor(Math.random() * (maxAyah - 1) + 1);
    // genereer van een random getal tussen 0 en het maximum om dus een random ayah te krijgen
    let newURL = `${url}/ayah/${ayahNum}`;

    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();

        ayah.surahNumber = data.data.surah.number;
        ayah.surahNameArabic = data.data.surah.name;
        ayah.surahNameEnglish = data.data.surah.englishName;
        ayah.ayah = data.data.text;
        ayah.ayahNumber = data.data.numberInSurah;
        ayah.numberQuran = data.data.number;

    } catch (error) {
        console.error("there was a problem fetching a random ayah: ", error);
        return null
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
