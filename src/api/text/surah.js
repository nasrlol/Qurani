"use strict";

/*
    return a list of all the surahs
    or return exact surah
    adding a number to the end specifies the number of the surah
*/

const url = "http://api.alquran.cloud/v1";

export async function surahDay() {
	// the amounts of surahs in the Quran.
	const maxSurahNum = 114;
	let newSurahNum = Math.floor(Math.random() * (maxSurahNum - 1) + 1);
	let newURL = `${url}/surah/${newSurahNum}`;

	try {
		const response = await fetch(newURL);
		if (!response.ok) throw new Error("failed to fetch the URL");

		const data = await response.json();
		// arrow function dat arrays.map gebruitk naar het schijnt, het fijne snap ik er nog niet van, maar het zet het object
		// om naar tekst en dat is handig voor de output, dan nog eens het nummer van de aya erbij en je hebt al een goeie representatie
		// van hoe een surah in een quran er uit zou moeten zien
		// TO DO: het uitklapbaar maken zodat het wat beter handelbaar is voor de UI
		return data.data.ayahs.map((ayah) => `${ayah.text} ${ayah.number}`);
	} catch (error) {
		console.error("there was a problem fetching a random ayah: ", error);
	}
}
