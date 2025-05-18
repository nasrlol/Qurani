const routes = {
    "/": () => import("../pages/home.js"),
    "/quran": () => import("../pages/quran.js"),
    "/tafsir": () => import("../pages/tafsir.js"),
    "/about": () => import("../pages/about.js"),
    "/search": () => import ("../pages/search.mjs")
};


export async function handleRoute() {
    const path = window.location.pathname;
    const loadModule = routes[path] || routes["/"];
    const module = await loadModule();

    const {render} = module;
    await render(document.querySelector("#app"));
}

document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (link) {
        e.preventDefault();
        const url = link.getAttribute("href");
        history.pushState(null, "", url);
        handleRoute();
    }
});

