const routes = {
    "/": () => import("../pages/home.mjs"),
    "/quran": () => import("../pages/quran.mjs"),
    "/translation": () => import("../pages/translation.mjs"),
    "/about": () => import("../pages/about.mjs"),
    "/search": () => import ("../pages/search.mjs"),
    "/favorites": () => import ("../pages/favorites.mjs")
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

