"use strict";

export function sortAscendingDescending() {
    return `
        <label for="sort">Sort</label>
        <select id="sort">
            <option value="ascending">Ascending</option> 
            <option value="descending">Descending</option> 
        </select>
`
}

export function sortRevelationLocation() {
    return `
        <label for="revelationLocation">Location</label> 
        <select id="revelationLocation">
            <option value="all">All</option>
            <option value="Medinan">Medinan</option>
            <option value="Meccan">Meccan</option>
        </select>
    `
}