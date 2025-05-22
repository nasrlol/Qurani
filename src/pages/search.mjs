"use strict";

import {navbar} from "../components/navbar.mjs";
import {footer} from "../components/footer.mjs";
import {getEditions, searchKeyword} from "../api/keywords.mjs";
import {languageDropdown} from "../components/language-dropdown.mjs";
import {surahDropdown} from "../components/surah-dropdown.mjs";
import {changeTheme} from "../utils/theme-utils.mjs";

export async function render(container) {

    container.innerHTML = `
        ${navbar} 
        <main>
            <aside class="searchContainer">
                <input id="search" placeholder="search">
                ${await languageDropdown()}
                ${surahDropdown()}
                <button id="searchButton">Search</button>
            </aside>
            <section id="searchResult"></section>
        </main>
        ${footer}
    `
    const submitSearchButton = document.getElementById("searchButton");
    const searchData = document.getElementById("search");
    const searchResult = document.getElementById("searchResult");
    submitSearchButton.addEventListener("click", async () => {
        const input = searchData.value;
        if (input !== "") {
            searchResult.innerHTML = await searchKeyword(input);
        }
    })

    const options = await getEditions();
    // problem : this returns an array

    options.forEach(option => {
        document.getElementById("languageValues").append(option);
    })
    changeTheme();
}