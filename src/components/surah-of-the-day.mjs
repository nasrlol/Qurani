"use strict";

import {getSurahRandom, surah} from "../api/surah.mjs";

export async function randomSurah() {
    await getSurahRandom();
    return `
          <div class="surah" id="surahDay">
            <p id="arabic" class="arabic">
                ${surah.nameEnglish}
                <br>
                ${surah.surah} 
            </p>
        </div>    
    `
}