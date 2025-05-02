"use strict";

import {getRandomAyah} from "../api/ayah.js";

export const ayaOfTheDay = `
<div>
    <p id="arabic">
      Ayah of the day:  ${await getRandomAyah()} 
    </p>
</div>
`