"use strict";

import {ayah, getAyah, getAyahAudio} from "../api/ayah.mjs";


export async function getAyahOfTheDay() {
    await getAyah()
    await getAyahAudio(ayah.numberQuran);

    return `
        <div class="ayahOfTheDay">
            <p id="arabic" class="arabic">
                ${ayah.surahNameEnglish}
                <br>
                ${ayah.ayahNumber} ${ayah.ayah} 
                <br>
                  <audio controls>
                    <source src=${ayah.audioURL} type="audio/mpeg">
                </audio>
            </p>
        </div>
`
}
