"use strict";

export let ayah = ``;

const url = "http://api.alquran.cloud/v1";

export async function getRandomAyah() {
	// idee: functie om een random ayah uit de Koran te halen en daar uit een ayah of the day the maken

	// aantal ayahs in de Quran
	const maxAyah = 6349;

	let newAyah = Math.floor(Math.random() * (maxAyah - 1) + 1);
	let newURL = `${url}/ayah/${newAyah}`;

	try {
		const response = await fetch(newURL);
		if (!response.ok) throw new Error("failed to fetch the URL");

		const data = await response.json();
		ayah = data.data.text;
		return ayah;
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
		if (!response.ok) throw new Error("failed to fetch the URL");

		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error("there was a problem fetching a random ayah: ", error);
	}
}
