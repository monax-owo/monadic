import { browser } from "$app/environment";

declare global {
  interface String {
    open(): String;
  }
}

String.prototype.open = function (): String {
  if (browser) window.open(this.toString());
  return this;
};

const tweet = (text: string): string => {
  return `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
};

export { tweet };
