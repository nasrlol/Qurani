"use strict";

import {getSurah, surah} from "../api/surah.mjs";

await getSurah();

export const surahOfTheDay = `
<div class="surahDay" id="surahDay">
    <p id="arabic">
        ${surah.nameEnglish}
        <br>
        ${surah.surah} 
    </p>
</div
`;
