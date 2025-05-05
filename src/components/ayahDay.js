"use strict";

import {getRandomAyah} from "../api/text/ayah.js";

export const ayahOfTheDay = `
<div class="ayahOfTheDay">
    <p id="arabic">
        ${await getRandomAyah()} 
    </p>
</div>
`;
