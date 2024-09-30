import type { LayoutLoad } from "./$types";

export const prerender = true;

type OG = { title: string; desc: string; image: string };
export const load = (async ({ url }) => {
  // pathnameかidか一貫させる (slugを使うようになる想定でpathnameがいいかも)
  const _path = url.pathname;
  const og: OG = {
    title: "",
    desc: "",
    image: "",
  };
  // og.title = "";
  // og.desc = "a";
  // og.image = `baseUrl/blog/ogp/${encodeURIComponent(og.title)}.png`;
  return { og };
}) satisfies LayoutLoad;
