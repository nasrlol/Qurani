"use strict";

export function changeTheme() {

    const button = document.getElementById("theme");


    let darkMode = localStorage.getItem("darkMode") === "true";

    if (darkMode === true) {

        document.documentElement.classList.add("dark-theme");
        document.body.classList.add("dark-theme");

        button.classList.add("dark-theme");

    }

    button.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark-theme");
        document.body.classList.toggle("dark-theme");

        button.classList.toggle("dark-theme");

        darkMode = !darkMode;
        localStorage.setItem("darkMode", darkMode);
    });


}