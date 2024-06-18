import { redirect, type Actions } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async () => {
	return {};
}) satisfies LayoutServerLoad;

export const actions = {
	goto: async ({ request }) => {
		const url: string = (await request.formData()).get("url") as string;
		redirect(303, url);
	},
} satisfies Actions;
