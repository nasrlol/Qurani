"use strict";

/*
    return a list of all the surahs
    or return exact surah
    adding a number to the end specifies the number of the surah
*/

const url = "http://api.alquran.cloud/v1"
let newUrl = ``

export async function surahDay(){

    // the amounts of surahs in the Quran.
    const maxSurahNum = 114;
    let newSurahNum = Math.floor(Math.random() * (maxSurahNum - 1) + 1);
    let newURL = `${url}/surah/${newSurahNum}`

    try {
        const response = await fetch(newURL);
        if (!response.ok) throw new Error("failed to fetch the URL");

        const data = await response.json();
        let ayahCountInRandomSurah = data.data.numberOfAyahs;
        for (let i = 0; i < ayahCountInRandomSurah; i++)
        {

        }
        return data.data.name;

    } catch (error) {
        console.error("there was a problem fetching a random ayah: ", error)
    }
}

export async function name(input){

}