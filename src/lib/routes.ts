// "Link":"Name"
import { base } from "$app/paths";

const hiddenBase = `${base}/hidden`;

export const hiddenRouteList = {
	"/hidden-tester": "TEST PAGE",
	"/post": "Post",
};
export const hiddenRoutes = Object.entries(hiddenRouteList)
	.map((list) => [`${hiddenBase}${list[0]}`, list[1]])
	.map(([link, title]) => ({ link, title }));

export const routeList = {
	"/": "Mon tools",
	"/color/watcher": "Color Watcher",
	"/other/key-tester": "Key tester",
};

export const routes = Object.entries(routeList)
	.map((list) => [`${base}${list[0]}`, list[1]])
	.map(([link, title]) => ({ link, title }));
