import { base } from "$app/paths";

// base = base path
// route = $page.url.pathname
// "Path":"Name"

export const routeObjToRoutes = (OBJ: object, BASE: string) => {
  return Object.entries(OBJ)
    .map((list) => [`${BASE}${list[0]}`, list[1]])
    .map(([path, title]): Route => ({ path, title }));
};

// TODO
// export const regPath = new RegExp("$g");
// export const createRouteList = (/* path: string */) => {
// 	allRoutes.filter((path) => {
// 		regPath.test(path.link);
// 	});
// };

export const setTitle = (routePath: string): string =>
  allRoutes.find((v: Route) => base + v.path === routePath)?.title ?? "";

const allRoutesList = {
  "/style": "Style",
  "/style/pixel": "Pixel Art CSS",
  "/tools": "Mon tools",
  "/tools/color/watcher": "Color Watcher",
  "/tools/other/href": "Url Jumper",
  "/tools/other/key-tester": "Key tester",
  "/tools/other/test": "Test",
  "/tools/other/valorant-chat-art": "Valorant Chat Art",
  "/tools/hidden": "Hidden",
  "/tools/hidden/post": "Post",
};

export const allRoutes = routeObjToRoutes(allRoutesList, base);

export type Route = {
  path: string;
  title: string;
};
