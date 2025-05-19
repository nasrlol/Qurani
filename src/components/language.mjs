"use strict";

export function languageDropdown(id) {

    return `
<div>
       <label>Select a language</label>
       <select id=${id}>
            <option value="en">English</option> 
            <option value="ar">Arabic</option> 
            <option value="fr">French</optionv> 
       </select> 
</div>

    `
}