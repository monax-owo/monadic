import autoprefixer from "autoprefixer";
import { cssDeclarationSorter } from "css-declaration-sorter";
import cssnano from "cssnano";
const config = {
	plugins: [
		autoprefixer({
			overrideBrowserslist: ["last 2 versions"],
		}),
		cssDeclarationSorter({ order: "smacss" }),
		cssnano()
	],
};
export default config;
