"use strict";

export function languageDropdown(id) {

    return `
       <label>Select a language</label>
       <select id=${id.toString()}>
            <option value="en">English</option> 
            <option value="ar">Arabic</option> 
            <option value="fr">French</optionv> 
       </select> 
    `
}