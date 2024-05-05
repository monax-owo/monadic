// "Link":"Name"
import { base } from "$app/paths";
// base = base path
// route = $page.url.id

export const routeObjToRoutes = (OBJ: object, BASE: string) => {
	return Object.entries(OBJ)
		.map((list) => [`${BASE}${list[0]}`, list[1]])
		.map(([link, title]): Route => ({ link, title }));
};
// TODO
// export const regPath = new RegExp("$g");
// export const createRouteList = (/* path: string */) => {
// 	allRoutes.filter((path) => {
// 		regPath.test(path.link);
// 	});
// };

export const setTitle = (route: string): string => allRoutes.find((value: Route) => value.link === route)?.title ?? "";
export const allRoutesList = {
	"/tools": "Mon tools",
	"/tools/color/watcher": "Color Watcher",
	"/tools/other/key-tester": "Key tester",
	"/tools/other/test": "Test",
	"/tools/hidden": "Hidden",
	"/tools/hidden/post": "Post",
};

export const allRoutes = routeObjToRoutes(allRoutesList, base);

export type Route = {
	link: string;
	title: string;
};
