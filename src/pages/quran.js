"use strict";
import {nav} from "../components/nav.mjs";
import {footer} from "../components/footer.mjs";
import {changeLanguage, filterSearch, getSurah, getSurahListOption} from "../api/surah.mjs";

export async function render(container) {

    const main = `
         <main>
            <div class="surahFields">
                <input id="searchInput" class="searchInput" placeholder="Search for a Surah...">
                <div>
                <label for="language">Language</label>
                <select name="language" id="selectLanguage">
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                </select>   
                </div>
            </div>
            <div class="selectSurah" id="selectSurah">
                ${await getSurahListOption()}
            </div>
        </main>   
    `
    container.innerHTML = `
        ${nav}
        ${main}
        ${footer}`;

    document.getElementById("selectLanguage").addEventListener("change", async () => {
        document.getElementById("selectSurah").innerHTML = await getSurahListOption(changeLanguage());
        await filterSearch();
    });

    let options = document.getElementsByClassName("options");
    for (let i = 0; i < options.length; i++) {

        options[i].addEventListener("click", async () => {

            container.innerHTML = `
            ${nav}
            <article class="arabic">
                ${await getSurah(options[i].getAttribute("data-id"))}            
            </article>
            ${footer}
            `
        })
    }

    await filterSearch();
}
