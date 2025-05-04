"use strict";

let url = "http://api.alquran.cloud/v1/search";

export async function searchAyah() {
	let newURL = "";
	document.getElementById("searchAyahButton").addEventListener("click", () => {
		let searchKeyword = document.getElementById("ayahSearchKeyword").innerText;
		let surah = document.getElementById("ayahSearchSurah").innerText;
		let language = document.getElementById("ayahSearchLanguage").innerText;

		newURL = `${url}/${searchKeyword}/${surah}/${language}`;
	});

	try {
		const response = await fetch(newURL);
		if (!response.ok) throw new Error("failed to fetch the URL");

		const data = await response.json();
		result = data.data;
		return ayah;
	} catch (error) {
		console.error("there was a problem fetching a random ayah: ", error);
	}
}
