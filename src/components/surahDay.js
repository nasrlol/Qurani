"use strict";

import {surahDay} from "../api/text/surah.js";

export const surahOfTheDay = `
<div class="surahDay">
    <p id="arabic">
        ${await surahDay()} 
    </p>
</div
`;
