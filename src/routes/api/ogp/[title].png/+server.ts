import { generateOgpImage } from "./ogpgen";
import type { RequestHandler } from "@sveltejs/kit";

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	const { title } = params;
	if (!title) throw new Error("title is not defined");
	const png = await generateOgpImage(title);
	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
		},
	});
};
