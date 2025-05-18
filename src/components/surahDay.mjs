"use strict";

import {getSurahRandom, surah} from "../api/surah.mjs";


await getSurahRandom();
export const surahDay = `
          <div class="surah" id="surahDay">
            <p id="arabic" class="arabic">
                ${surah.nameEnglish}
                <br>
                ${surah.surah} 
            </p>
        </div>    
    `