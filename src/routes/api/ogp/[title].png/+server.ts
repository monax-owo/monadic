import { logger } from "$lib/util/logger";
import { read } from "$app/server";
import { ogpImageGen } from "./ogpgen";
import type { RequestHandler } from "@sveltejs/kit";
import NotoSansJP from "./NotoSansJP.ttf";

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
  const { title } = params;
  if (!title) logger.error("title is not defined");
  const png = await ogpImageGen(title ?? "", read(NotoSansJP));
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
