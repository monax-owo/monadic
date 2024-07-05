export const setDefaultTheme = () => {
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme") ?? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
};
export const setTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
};
