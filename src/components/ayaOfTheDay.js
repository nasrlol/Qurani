"use strict";

import { getRandomAyah } from "../api/ayah.js";

export const ayahOfTheDay = `
<div class="ayahOfTheDay">
    <p id="arabic">
        ${await getRandomAyah()} 
    </p>
</div>
`;
