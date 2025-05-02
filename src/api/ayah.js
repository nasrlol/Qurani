"use strict";

const url = "http://api.alquran.cloud/v1/ayah"


// idee: functie om een random ayah uit de Koran te halen en daar uit een ayah of the day the maken

// aantal ayahs in de Quran
const maxAyah = 6349;


export let ayah = ``

export async function getRandomAyah() {
    let newAyah = Math.floor(Math.random() * (maxAyah - 1) + 1);
    let newURL = `${url}/${newAyah}`

    try {
        const response = await fetch(newURL);
        if(!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        ayah = data.data.text;
        return ayah

    } catch(error) {
        console.error("there was a problem fetching a random ayah: ", error)
    }
}



