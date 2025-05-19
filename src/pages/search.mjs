"use strict";

import {nav} from "../components/nav.mjs";
import {footer} from "../components/footer.mjs";
import {searchKeyword} from "../api/surah.mjs";
import {languageDropdown} from "../components/language.mjs";


export async function render(container) {


    container.innerHTML = `
        ${nav} 
        <main>
            <div class="searchContainer">
                <input id="search" placeholder="search">
                <button id="searchButton" >Search</button>
                <div id="searchResult"></div>
                ${languageDropdown()}
            </div>
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
}