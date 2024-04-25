// "Link":"Name"
import { base } from "$app/paths";
// base = base path
// route = $page.url.id

export const routeListToRoutes = (OBJ: object, BASE: string) => {
	return Object.entries(OBJ)
		.map((list) => [`${BASE}${list[0]}`, list[1]])
		.map(([link, title]): Route => ({ link, title }));
};
// export const regPath = new RegExp("$g");
// export const createRouteList = (/* path: string */) => {
// 	allRoute.filter((path) => {
// 		regPath.test(path.link);
// 	});
// };

export const setTitle = (route: string): string => allRoute.find((value: Route) => value.link === route)?.title ?? "";
export const allRouteList = {
	"/tools": "Mon tools",
	"/tools/color/watcher": "Color Watcher",
	"/tools/other/key-tester": "Key tester",
	"/tools/other/test": "Test",
	"/tools/hidden": "Hidden",
	"/tools/hidden/post": "Post",
};

export const allRoute = routeListToRoutes(allRouteList, base);

type Route = {
	link: string;
	title: string;
};
