"use strict";
import {navbar} from "../components/navbar.mjs";
import {footer} from "../components/footer.mjs";
import {changeLanguage, filterSearch, getSurah, getSurahListOption, getSurahTitle} from "../api/surah.mjs";
import {changeTheme} from "../utils/theme-utils.mjs";
import {sortAscendingDescending, sortRevelationLocation} from "../components/sort-dropdown.mjs";
import {favorite, favoritesButton} from "../components/favorites-list.mjs";

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
                ${sortAscendingDescending()}
                ${sortRevelationLocation()}
                </div>
            </div>
            <div class="selectSurah" id="selectSurah">
                ${await getSurahListOption()}
            </div>
        </main>   
    `
    container.innerHTML = `
        ${navbar}
        ${main}
        ${footer}`;

    document.getElementById("selectLanguage").addEventListener("change", async () => {
        const sortValue = document.getElementById("sort").value;
        const locationValue = document.getElementById("revelationLocation").value;
        document.getElementById("selectSurah").innerHTML = await getSurahListOption(changeLanguage(), sortValue, locationValue);
        await filterSearch();
    });

    document.getElementById("sort").addEventListener("change", async () => {
        const sortValue = document.getElementById("sort").value;
        const locationValue = document.getElementById("revelationLocation").value;
        document.getElementById("selectSurah").innerHTML = await getSurahListOption(changeLanguage(), sortValue, locationValue);
        await filterSearch();
    });


    document.getElementById("revelationLocation").addEventListener("change", async () => {
        const sortValue = document.getElementById("sort").value;
        const locationValue = document.getElementById("revelationLocation").value;
        document.getElementById("selectSurah").innerHTML = await getSurahListOption(changeLanguage(), sortValue, locationValue);
        await filterSearch();
    });

    let options = document.getElementsByClassName("options");
    for (let i = 0; i < options.length; i++) {
        const title = await getSurahTitle(options[i].getAttribute("data-id"));
        const surah = await getSurah(options[i].getAttribute("data-id"));

        options[i].addEventListener("click", async () => {
            container.innerHTML = `
            ${navbar}
           <main>
           <div class="chapterTopContainer">
            <h2>${title}</h2>
            ${favoritesButton} 
           </div>
          
            <section class="arabic">
                ${surah}            
            </section> 
           </main> 
          
            ${footer}`
            changeTheme();
            favorite(title);
        })
    }

    await filterSearch();
    changeTheme();
}
