const copy = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Success");
    })
    .catch(err => {
      console.error("Failed", err);
    });
};
const paste = () /* : string */ => {
  navigator.clipboard
    .readText()
    .then(() => {
      console.log("Success");
    })
    .catch(err => {
      console.error("Failed", err);
    });
};

export { copy, paste };
