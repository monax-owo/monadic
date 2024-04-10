// "Link":"Name"
export const routeList = {
  "/": "Mon tools",
  "/color/watcher": "Color Watcher",
  "/other/key-tester": "Key tester",
  "/other/post": "Post"
};

const routes = Object.entries(routeList).map(([link, title]) => ({ link, title }));

export default routes;
