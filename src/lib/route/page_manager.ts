import { logger } from "$lib/util/logger";

type Page = {
  path: string | URL;
  title: string;
  description: string;
};

const PageList = class {
  pages: Page[];
  constructor() {
    this.pages = [];
  }
  /**
   * add
   * Page型のオブジェクトからページを追加する
   */
  public add(item: Page) {
    this.pages.push(item);
  }
  /**
   * addPage
   * path,title,descriptionを指定してページを追加する
   */
  public addPage(path: string, title: string, description: string) {
    this.add({ path, title, description });
  }

  public get value(): Page[] {
    if (this.pages.length === 0) logger.error("pages is undefined");
    return this.pages;
  }
};
export { PageList };
export type { Page };
