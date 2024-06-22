export const copy = (text: string) => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log("Success");
		})
		.catch((err) => {
			console.error("Failed", err);
		});
};
