"use strict";

// a list that counts to 114, the amount of surahs
export function surahDropdown() {

    let result = `
        <div>
            <label for="surahDropdownList">Select a Surah</label>
            <select id="surahDropdownList">
            <option value="all">all</option>
    `;
    /* all :  the default value for retrieving keywords from all the surahs*/
    for (let i = 1; i <= 114; i++) {
        result += `<option value="${i}">${i}</option>`;
    }

    result += `</select></div>`;
    return result;
}