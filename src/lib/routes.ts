// "Link":"Name"
import { base } from "$app/paths";
export const routeList = {
  "/": "Mon tools",
  "/color/watcher": "Color Watcher",
  "/other/key-tester": "Key tester",
  "/other/post": "Post"
};

export const routes = Object.entries(routeList)
  .map((list) => [`${base}${list[0]}`, list[1]])
  .map(([link, title]) => ({ link, title }));
