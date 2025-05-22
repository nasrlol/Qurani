"use strict";

// the quran cloud api provides an endpoint that returns all the available editions of translations etc.
// this will allow me to provide a better language dropdown module for retrieving translations

export async function getEditions() {

    const url = "http://api.alquran.cloud/v1/edition"
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        return data.data.map((edition) => {
            const option = document.createElement("option");
            option.value = edition.identifier;
            option.textContent = edition.language;
            return option;
        })
    } catch (error) {
        console.error("failed to retrieve the editions: ", error);
        return null;
    }
}

export async function searchKeyword(string) {

    const url = "http://api.alquran.cloud/v1/search"
    const languageValue = document.getElementById("languageValues").value;
    const location = document.getElementById("surahDropdownList").value;
    let newURL;
    newURL = `${url}/${string}/${location}/${languageValue}`;

    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("There was trouble finding the ayah you searched for");

        const data = await response.json();
        return data.data.matches.map((ayah) => `<p>${ayah.number}:${ayah.surah.number} ${ayah.text}</p><br>`).join("");

    } catch (error) {
        console.error("No keywords were found");
    }
}
