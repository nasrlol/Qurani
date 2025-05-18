"use strict";

import {nav} from "../components/nav.mjs";
import {footer} from "../components/footer.mjs";


export function render(container) {

    container.innerHTML = `

        ${nav} 
        <main>
        
            <input id="search" placeholder="search"></input> 
            <button id="searchButton" type="submit"></button>
        
        </main>
        ${footer}
    `

    const submitSearchButton = document.getElementById("searchButton");
    const searchData = document.getElementById("search");
    searchData.addEventListener("keypress", () => {
        if (event.key !== "Enter") {
            console.log("enter received");
        }
    })
    submitSearchButton.addEventListener("submit", () => {
        console.log("submit received");
    })
}