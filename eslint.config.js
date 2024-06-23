import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";

import parser from "svelte-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

import js from "@eslint/js";
import ts from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

// "off" | 0
// "warn" | 1
// "error" | 2

export default [
	{
		ignores: [
			"**/.DS_Store",
			"**/node_modules",
			"build",
			".svelte-kit",
			"package",
			"**/.env",
			"**/.env.*",
			"!**/.env.example",
			"**/pnpm-lock.yaml",
			"**/package-lock.json",
			"**/yarn.lock",
		],
	},
	...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended", "prettier"),
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parser: ts.parser,
			ecmaVersion: 6,
			sourceType: "module",
			parserOptions: {
				extraFileExtensions: [".svelte"],
			},
		},
		rules: {},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parser: parser,
			ecmaVersion: 6,
			sourceType: "script",
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
];
