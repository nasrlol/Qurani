"use strict";

import {getSurah, surah} from "../api/surah.mjs";

await getSurah();

export const surahOfTheDay = `
<div class="surahDay">
    <p id="arabic">
        ${surah.nameEnglish}
        <br>
        ${surah.surah} 
    </p>
</div
`;
