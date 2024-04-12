// "Link":"Name"
import { base } from "$app/paths";

export const routeListToRoutes = (OBJ: object, BASE: string) => {
	return Object.entries(OBJ)
		.map((list) => [`${BASE}${list[0]}`, list[1]])
		.map(([link, title]) => ({ link, title }));
};

const hiddenBase = `${base}/hidden`;
export const hiddenRouteList = {
	"/hidden-tester": "TEST PAGE",
	"/post": "Post",
};
// export const hiddenRoutes = routeListToRoutes(hiddenRouteList, hiddenBase);

const toolsBase = `${base}/tools`;
export const toolsRouteList = {
	"/": "Mon tools",
	"/color/watcher": "Color Watcher",
	"/other/key-tester": "Key tester",
};
// export const toolsRoutes = routeListToRoutes(toolsRouteList, toolsBase);

export const toolsRoutes = Object.entries(toolsRouteList)
	.map((list) => [`${toolsBase}${list[0]}`, list[1]])
	.map(([link, title]) => ({ link, title }));

export const hiddenRoutes = Object.entries(hiddenRouteList)
	.map((list) => [`${hiddenBase}${list[0]}`, list[1]])
	.map(([link, title]) => ({ link, title }));
