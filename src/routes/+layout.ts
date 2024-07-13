import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load = (async () => {
  const og: { title: string; description: string; image: string } = {
    title: "",
    description: "",
    image: "",
  };
  // ogp.title = "";
  // ogp.description = "a";
  // ogp.image = `baseUrl/blog/ogp/${encodeURIComponent(og.title)}.png`;
  return { og };
}) satisfies LayoutLoad;
