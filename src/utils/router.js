const routes = {
	"/": () => import("../pages/home.js"),
	"/about": () => import("../pages/about.js"),
	"/contact": () => import("../pages/home.js"),
};

export async function handleRoute() {
	const path = window.location.pathname;
	const route = routes[path] || routes["/"];
	const module = await route();

	const { render } = module;
	render(document.querySelector("#app"));
}

window.addEventListener("popstate", handleRoute);
handleRoute();
