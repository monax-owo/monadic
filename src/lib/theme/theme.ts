const setDefaultTheme = () => {
	document.documentElement.setAttribute(
		"theme",
		localStorage.getItem("theme") ?? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
	);
};
const setTheme = (theme) => {
	document.documentElement.setAttribute("theme", theme);
};